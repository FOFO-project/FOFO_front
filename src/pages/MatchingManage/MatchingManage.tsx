import { FofoHeader } from "../../widgets/widgets";
import { MatchingManagePanel } from "../../widgets/listPanels/MatchingPanel/MatchingManagePanel";
import { useState } from "react";
import style from "./MatchingManage.module.scss";
import page_styles from "../pages.module.scss";

export function MatchingManage() {
	const [matchings, _setMatchings] = useState([]);

	const [selectedItems, setSelectedItems] = useState<number[]>([]);

	return (
		<div className={page_styles.Page}>
			<FofoHeader className={style.Header} />
			<div className={page_styles.Panel}>
				<div className={style.container}>
					<div className={style.contentsContainer}>
						<div className={style.contents}>
							<MatchingManagePanel
								matchings={matchings}
								selectedProps={{
									selectedItems: selectedItems,
									setSelectedItems: setSelectedItems,
								}}
								title={""}
							/>
						</div>
					</div>
					<div className={style.buttonContainer}>
						<div className={``}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
