import { FofoHeader } from "../../widgets/widgets";
import { MatchingManagePanel } from "../../widgets/listPanels/MatchingPanel/MatchingManagePanel";
import { MatchingConfirm, MatchingCancel } from "../../features/features";
import { MatchRequestDto, Matching, ApiCaller } from "../../shared/shared";
import { useState, useEffect } from "react";
import style from "./MatchingManage.module.scss";
import page_styles from "../pages.module.scss";

export function MatchingManage() {
	const [matchings, setMatchings] = useState<Matching[]>([]);
	const [selectedItems, setSelectedItems] = useState<MatchRequestDto[]>([]);
	const matchingStatus = "MATCHING_PENDING";

	// page 진입 시 최초 조회 로직
	useEffect(() => {
		ApiCaller.get(
			"/match/result",
			{matchingStatus:matchingStatus}
		).then((e) => {
			const matchingList:Matching[] = e.data.content.map((e:any) =>{
				return new Matching(e);
			});
			setMatchings(matchingList);
		});
	}, []);

	return (
		<div className={page_styles.Page}>
			<FofoHeader className={style.Header} />
			<div className={page_styles.Panel}>
				<div className={style.container}>
					<div className={style.contentsContainer}>
						<div className={style.contents}>
							<MatchingManagePanel
								matchings={matchings}
								setMatchings={setMatchings}
								selectedProps={{
									selectedItems: selectedItems,
									setSelectedItems: setSelectedItems,
								}}
								title={""}
								pageType={matchingStatus}
							/>
						</div>
					</div>
					<div className={style.buttonContainer}>
						<MatchingConfirm 
							matchData={selectedItems}/>
						<MatchingCancel matchItems={selectedItems}/>
					</div>
				</div>
			</div>
		</div>
	);
}
