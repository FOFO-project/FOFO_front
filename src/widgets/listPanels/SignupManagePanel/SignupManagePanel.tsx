import { ConditionBox, ItemListPanel } from "../../../shared/shared";
import { useReducer, useState } from "react";
import { ConditionListModel } from "../../../shared/shared";
import styles from "./SignupManagePanel.module.scss";

export function SignupManagePanel({}: any) {
	const reducer = (
		state: ConditionListModel,
		action: { type: "set"; params?: keyof ConditionListModel }
	) => {
		const { type, params } = action;
		switch (type) {
			case "set":
				return Object.assign(state, params);
			default:
				return state;
		}
	};
	const [conditionListData, dispatch] = useReducer(
		reducer,
		new ConditionListModel()
	);
	const [items, setItems] = useState([]);
	return (
		<div className={styles.container}>
			<div className={styles.contentsContainer}>
				<ConditionBox state={conditionListData} dispatch={dispatch} />
				<ItemListPanel items={items} />
			</div>
			<div className={styles.buttonContainer}>
				<button>입금확인</button>
				<button>거절</button>
			</div>
		</div>
	);
}
