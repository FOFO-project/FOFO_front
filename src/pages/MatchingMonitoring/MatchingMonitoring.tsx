import { FofoHeader } from "../../widgets/widgets";
import { MatchingManagePanel } from "../../widgets/listPanels/MatchingPanel/MatchingManagePanel";
import { MatchingBack } from "../../features/features";
import { Matching, ApiCaller } from "../../shared/shared";
import { useState, useEffect } from "react";
import style from "./MatchingMonitoring.module.scss";
import page_styles from "../pages.module.scss";

export function MatchingMonitoring() {
	const [matchings, setMatchings] = useState<Matching[]>([]);
	const [selectedItems, setSelectedItems] = useState<Matching[]>([]);
	const matchingStatus = "MATCHING_COMPLETED";

	// page 진입 시 최초 조회 로직
	useEffect(() => {
		ApiCaller.get("/match/result", { matchingStatus: matchingStatus }).then(
			(e) => {
				const matchingList: Matching[] = e.data.content.map(
					(e: any) => {
						return new Matching(e);
					}
				);
				setMatchings(matchingList);
			}
		);
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
						<MatchingBack matchItems={selectedItems} />
					</div>
				</div>
			</div>
		</div>
	);
}
