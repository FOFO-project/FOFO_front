import { FofoHeader } from "../../widgets/widgets";
import { MatchingManagePanel } from "../../widgets/listPanels/MatchingPanel/MatchingManagePanel";
import { MatchingConfirm, MatchingCancel } from "../../features/features";
import { MatchRequestDto } from "../../shared/shared";
import { useState } from "react";
import style from "./MatchingManage.module.scss";
import page_styles from "../pages.module.scss";

export function MatchingManage() {
	const [matchings, setMatchings] = useState([]);
	const [selectedItems, setSelectedItems] = useState<MatchRequestDto[]>([]);
	const matchingStatus = "MATCHING_PROGRESSING";

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
