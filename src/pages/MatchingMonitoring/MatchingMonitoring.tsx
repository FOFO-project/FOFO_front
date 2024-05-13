import { CommonHeader } from "../../widgets/widgets";
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

	return (
		<div className={page_styles.Page}>
			<CommonHeader className={style.Header} />
			<div className={page_styles.Panel}>
				<div className={style.container}>
					<div className={style.contentsContainer}>
						<div className={style.contents}>
							<MatchingManagePanel
								matchingProps={{
									matchings: matchings,
									setMatchings: setMatchings,
								}}
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
