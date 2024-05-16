import { Matching, MatchingStatus, Member } from "../../../../shared/shared";
import style from "../MatchingManagePanel.module.scss";

interface MatchingProps {
	matchings: Matching[];
	setMatchings: Function;
}

interface SelectedProps {
	selectedItems: Matching[];
	setSelectedItems: Function;
}

interface TableContentsProps {
	conditionData: { matchingStatus: string };
	matchingProps: MatchingProps;
	selectedProps: SelectedProps;
}

export function TableContents({
	conditionData,
	matchingProps,
	selectedProps,
}: TableContentsProps) {
	const { matchings, setMatchings } = matchingProps;
	const { selectedItems, setSelectedItems } = selectedProps;

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
                item.manAgreement = item.manAgreement === "Y" ? 
                "N" : (item.manAgreement === "N" ? "UNDEFINED" : "Y");
            }
        });
        setMatchings(matchings.slice());
    }

    const WomanHeart = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, matchingId: any) => {
        e.preventDefault();
        matchings.map((item) => {
            if(item.id === matchingId){
                item.womanAgreement = item.womanAgreement === "Y" ? 
                "N" : (item.womanAgreement === "N" ? "UNDEFINED" : "Y");
            }
        });
        setMatchings(matchings.slice());
    }

	return (
		<tbody className="text-center">
			{matchings?.map((matching) => (
				<tr
					key={matching.id}
					className={`align-middle ${
						matching.matchingStatus ===
						MatchingStatus.MATCHING_PROGRESSING
							? "table-warning"
							: (matching.matchingStatus === 
								MatchingStatus.MATCHING_COMPLETED
								&& matching.manAgreement == "Y" 
								&& matching.womanAgreement == "Y"
							) ? "table-success" : ""
					}`}
					style={{ height: 100 }}
				>
					<td scope="row">
						<input
							type="checkbox"
							onChange={() => checkboxHandler(matching)}
							checked={selectedItems.includes(matching as any)}
						/>
					</td>
					<td>{matching.man?.name}</td>
					<td>{matching.man?.kakaoId}</td>
					<td>
						{Member.getFilteringString(
							matching.man?.filteringAgeRelation
								? matching.man?.filteringAgeRelation
								: null,
							matching.man?.filteringSmoker
								? matching.man?.filteringSmoker
								: null,
							matching.man?.filteringReligion
								? matching.man?.filteringReligion
								: null
						)}
					</td>
					<td>
						<div className='row'>
							<div className={`col ${style.left_box}`}>
								<button className={`${style.heart_button}`}
									onClick={(e) => ManHeart(e, matching.id)}
									disabled={conditionData.matchingStatus === "MATCHING_COMPLETED" ? true:false}>
										<div className={
											matching.manAgreement == "Y" ? style.heart_clicked_left : 
											(matching.manAgreement == "N" ? style.heart_unclicked_left : style.heart_null_left)}></div>
								</button>
							</div>
							<div className={`col ${style.right_box}`}>
								<button className={`${style.heart_button}`}
									onClick={(e) => WomanHeart(e, matching.id)}
									disabled={conditionData.matchingStatus === "MATCHING_COMPLETED" ? true:false}>
										<div className={
											matching.womanAgreement == "Y" ? style.heart_clicked_right : 
											(matching.womanAgreement == "N" ? style.heart_unclicked_right : style.heart_null_right)}></div>
								</button>
							</div>
						</div>
					</td>
					<td>{matching.woman?.name}</td>
					<td>{matching.woman?.kakaoId}</td>
					<td>
						{Member.getFilteringString(
							matching.woman?.filteringAgeRelation
								? matching.woman?.filteringAgeRelation
								: null,
							matching.woman?.filteringSmoker
								? matching.woman?.filteringSmoker
								: null,
							matching.woman?.filteringReligion
								? matching.woman?.filteringReligion
								: null
						)}
					</td>
				</tr>
			))}
		</tbody>
	);
}
