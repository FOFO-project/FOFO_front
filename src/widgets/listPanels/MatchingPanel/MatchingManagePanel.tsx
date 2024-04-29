import { Matching } from "../../../shared/shared";
import { NoneCondition, Member, MatchingStatus } from "../../../shared/shared";
import { FindMatch } from "../../../features/features";
import style from "./MatchingManagePanel.module.scss";
import classNames from "classnames";

interface SelectedProps {
	selectedItems: Matching[];
	setSelectedItems: Function;
}
interface MatchingManagePanelProps {
	matchings: Matching[];
	setMatchings: Function;
	selectedProps: SelectedProps;
	title: string;
	pageType: Object;
}
export function MatchingManagePanel({
	matchings,
	setMatchings,
	selectedProps,
	title,
	pageType
}: MatchingManagePanelProps) {
	const { selectedItems, setSelectedItems } = selectedProps;
	
	// 매칭중(MATCHING_NOTCOMPLETED)
	const conditionData = {
		matchingStatus: pageType
	};

	// checkbox handler
	const checkboxHandler = (match: Matching) => {
		setSelectedItems((preSelectedItems: Matching[]) => {
			const isSelectedItems = preSelectedItems.includes(match);
			return isSelectedItems
				? preSelectedItems.filter((item) => item.id !== match.id)
				: [...preSelectedItems, match];
		});
	};

	const ManHeart = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, matchingId: any) => {
		e.preventDefault();
		matchings.forEach((item) => {
			if(item.id === matchingId){
				item.manAgreement = item.manAgreement === "Y" ? "N" : "Y";
			}
		});
		setMatchings(matchings.slice());
	}

	const WomanHeart = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, matchingId: any) => {
		e.preventDefault();
		matchings.map((item) => {
			if(item.id === matchingId){
				item.womanAgreement = item.womanAgreement === "Y" ? "N" : "Y";
			}
		});
		setMatchings(matchings.slice());
	}

	return (
		<div className={style.container}>
			<div className={style.button_container}>
				<FindMatch conditionData={conditionData} setMatchings={setMatchings} />
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
					<tbody className="text-center">
						{matchings?.map((matching) => (
							<tr
								key={matching.id}
								className={`align-middle ${matching.matchingStatus === MatchingStatus.MATCHING_PROGRESSING ? "table-success" : ""}`}
								style={{ height: 100 }}
							>
								<td scope="row">
									<input
										type="checkbox"
										onChange={() =>
											checkboxHandler(matching)
										}
										checked={selectedItems.includes(
											matching as any
										)}
										disabled={conditionData.matchingStatus === "MATCHING_COMPLETED" ? true:false}
									/>
								</td>
								<td>{matching.man?.name}</td>
								<td>{Member.getBirthdayString(matching.man?.birthday?matching.man?.birthday:null)}</td>
								<td>{Member.getAddressString(matching.man?.address?matching.man?.address:null)}</td>
								<td>{Member.getFilteringString(matching.man?.filteringAgeRelation?matching.man?.filteringAgeRelation:null,
																matching.man?.filteringSmoker?matching.man?.filteringSmoker:null,
																matching.man?.filteringReligion?matching.man?.filteringReligion:null
								)}</td>
								<td>
									<div className='row'>
										<div className={`col ${style.left_box}`}>
											<button className={`${style.heart_button}`}
												onClick={(e) => ManHeart(e, matching.id)}
												disabled={conditionData.matchingStatus === "MATCHING_COMPLETED" ? true:false}>
													<div className={matching.manAgreement == "Y" ? style.heart_clicked_left : style.heart_unclicked_left}></div>
											</button>
										</div>
										<div className={`col ${style.right_box}`}>
											<button className={`${style.heart_button}`}
												onClick={(e) => WomanHeart(e, matching.id)}
												disabled={conditionData.matchingStatus === "MATCHING_COMPLETED" ? true:false}>
													<div className={matching.womanAgreement == "Y" ? style.heart_clicked_right : style.heart_unclicked_right}></div>
											</button>
										</div>
									</div>
								</td>
								<td>{matching.woman?.name}</td>
								<td>{Member.getBirthdayString(matching.woman?.birthday?matching.woman?.birthday:null)}</td>
								<td>{Member.getAddressString(matching.woman?.address?matching.woman?.address:null)}</td>
								<td>{Member.getFilteringString(matching.woman?.filteringAgeRelation?matching.woman?.filteringAgeRelation:null,
																matching.woman?.filteringSmoker?matching.woman?.filteringSmoker:null,
																matching.woman?.filteringReligion?matching.woman?.filteringReligion:null
								)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
