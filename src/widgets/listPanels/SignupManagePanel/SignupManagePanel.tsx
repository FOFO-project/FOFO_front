import { ConditionBox, ItemListPanel } from "../../../shared/shared";
import { useReducer, useState } from "react";
import { ConditionListModel } from "../../../shared/shared";
import styles from "./SignupManagePanel.module.scss";

export function SignupManagePanel({}: any) {
	const [conditionData, setConditionData] = useState(
		new ConditionListModel()
	);
	const [items, setItems] = useState([]);
	return (
		<div className={styles.container}>
			<div className={styles.contentsContainer}>
				<ConditionBox
					conditionData={conditionData}
					setConditionData={setConditionData}
				/>
				<ItemListPanel items={items} />
			</div>
		</div>
	);
}
