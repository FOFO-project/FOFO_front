import { CommonHeader } from "../../widgets/widgets";
import { MatchingManagePanel } from "../../widgets/listPanels/MatchingPanel/MatchingManagePanel";
import {
	MatchingConfirm,
	MatchingCancel,
	MatchingProceed,
	MatchingSave,
} from "../../features/features";
import { Matching, MatchingStatus } from "../../shared/shared";
import { useState } from "react";
import style from "./MatchingManage.module.scss";
import page_styles from "../pages.module.scss";

export function MatchingManage() {
	const [matchings, setMatchings] = useState<Matching[]>([]);
	const [selectedItems, setSelectedItems] = useState<Matching[]>([]);
	const matchingStatus = "MATCHING_NOTCOMPLETED";

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
						<MatchingSave
							matchData={selectedItems.filter(
								(matching) =>
									matching.matchingStatus ===
									MatchingStatus.MATCHING_PROGRESSING
							)}
						/>
						<MatchingProceed
							matchData={selectedItems.filter(
								(matching) =>
									matching.matchingStatus ===
									MatchingStatus.MATCHING_PENDING
							)}
						/>
						<MatchingConfirm
							matchData={selectedItems.filter(
								(matching) =>
									matching.matchingStatus ===
									MatchingStatus.MATCHING_PROGRESSING
							)}
						/>
						<MatchingCancel matchItems={selectedItems} />
					</div>
				</div>
			</div>
		</div>
	);
}
