import { FofoHeader } from "../../widgets/widgets";
import { MatchingManagePanel } from "../../widgets/listPanels/MatchingPanel/MatchingManagePanel";
import { MatchRequestDto } from "../../shared/shared";
import { useState } from "react";
import style from "./MatchingMonitoring.module.scss";
import page_styles from "../pages.module.scss";

export function MatchingMonitoring() {
	const [matchings, setMatchings] = useState([]);
	const [selectedItems, setSelectedItems] = useState<MatchRequestDto[]>([]);
	const matchingStatus = "MATCHING_COMPLETED";

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
				</div>
			</div>
		</div>
	);
}
