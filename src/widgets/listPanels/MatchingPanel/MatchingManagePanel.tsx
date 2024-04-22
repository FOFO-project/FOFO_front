import { useState } from "react"
import { Matching, MatchRequestDto } from "../../../shared/shared";
import { NoneCondition } from "../../../shared/shared";
import { FindMatch } from "../../../features/features";
import style from "./MatchingManagePanel.module.scss";
import classNames from "classnames";

interface SelectedProps {
	selectedItems: MatchRequestDto[];
	setSelectedItems: Function;
}
interface MatchingManagePanelProps {
	matchings: Matching[];
	setMatchings: Function;
	selectedProps: SelectedProps;
	title: string;
}
export function MatchingManagePanel({
	matchings,
	setMatchings,
	selectedProps,
	title,
}: MatchingManagePanelProps) {
	const { selectedItems, setSelectedItems } = selectedProps;
	let [manHeartClicked, setManHeartClicked] = useState(false);
	let [womanHeartClicked, setWomanHeartClicked] = useState(false);
	
	// 매칭중(MATCHING_PENDING)
	const conditionData = "20";

	// checkbox handler
	const checkboxHandler = (matchingId: any) => {
		setSelectedItems((preSelectedItems: number[]) => {
			const isSelectedItems = preSelectedItems.includes(matchingId);
			return isSelectedItems
				? preSelectedItems.filter((id) => id !== matchingId)
				: [...preSelectedItems, matchingId];
		});
	};

	const ManHeart = (matchingId: any) => {
		manHeartClicked = !manHeartClicked;
		setManHeartClicked(manHeartClicked);
		matchings.forEach((item) => {
			if(item.id === matchingId){
				if(manHeartClicked){
					matchings[matchingId] = {...item, manAgreement: "Y"};
				} else{
					matchings[matchingId] = {...item, manAgreement: "N"};
				}
				
			}
		});
		setMatchings(matchings.slice());
	}

	const WomanHeart = (matchingId: any) => {
		let womanAgreementChanged;
		womanHeartClicked = !womanHeartClicked;
		setWomanHeartClicked(womanHeartClicked);
		matchings.map((item) => {
			if(item.id === matchingId){
				womanAgreementChanged = {...item, womanAgreement: manHeartClicked};
			}
		});
		setMatchings(matchings.slice());
	}

	return (
		<div className={style.container}>
			<div className={style.button_container}>
				<div className={style.button_container}>
					<FindMatch conditionData={conditionData} setMembers={setMatchings} />
				</div>
			</div>
			<div className={style.table_container}>
				<table className={classNames(`table`)}>
					<thead>
						<tr>
							<th className="col bg-black text-light align-middle">
								{title}
							</th>
							<th className={`col bg-black`}>
								<NoneCondition title="이름" />
							</th>
							<th className={`col bg-black`}>
								<NoneCondition title="생년월일" />
							</th>
							<th className={`col bg-black`}>
								<NoneCondition title="주소" />
							</th>
							<th className={`col bg-black`}>
								<NoneCondition title="절대 안되는 부분" />
							</th>
							<th className={`col bg-black`}>
								<NoneCondition title="매칭 상태" />
							</th>
							<th className={`col bg-black`}>
								<NoneCondition title="이름" />
							</th>
							<th className={`col bg-black`}>
								<NoneCondition title="생년월일" />
							</th>
							<th className={`col bg-black`}>
								<NoneCondition title="주소" />
							</th>
							<th className={`col bg-black`}>
								<NoneCondition title="절대 안되는 부분" />
							</th>
						</tr>
					</thead>
					<tbody>
						{matchings?.map((matching) => (
							<tr
								key={matching.id}
								className="align-middle"
								style={{ height: 100 }}
							>
								<td scope="row">
									<input
										type="checkbox"
										onChange={() =>
											checkboxHandler(matching.id)
										}
										checked={selectedItems.includes(
											matching.id as any
										)}
									/>
								</td>
								<td>{matching.man?.name}</td>
								<td>{matching.man?.getBirthdayString()}</td>
								<td>{matching.man?.getAddressString()}</td>
								<td>{matching.man?.getFilteringString()}</td>
								<td className={style.heart_container}>
									<div className={`${style.heart_left} ${manHeartClicked ? style.heart_clicked : style.heart_unclicked}`}
										onClick={ManHeart(matching.id)}></div>
									<div className={`${style.heart_right} ${womanHeartClicked ? style.heartClicked : style.heart_unclicked}`}
										onClick={WomanHeart(matching.id)}></div>
								</td>
								<td>{matching.woman?.name}</td>
								<td>{matching.woman?.getBirthdayString()}</td>
								<td>{matching.woman?.getAddressString()}</td>
								<td>{matching.woman?.getFilteringString()}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
