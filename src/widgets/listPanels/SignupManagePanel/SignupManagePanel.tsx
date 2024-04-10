import { ConditionBox, ItemListPanel } from "../../../shared/shared";
import { useReducer, useState } from "react";
import { ConditionListModel } from "../../../shared/shared";
import styles from "./SignupManagePanel.module.scss";

export function SignupManagePanel({}: any) {
	const [items, setItems] = useState([]);
	return (
		<div className={styles.container}>
			<div className={styles.contentsContainer}>
				<ConditionBox />
				<ItemListPanel items={items} />
			</div>
			<div className={styles.buttonContainer}>
				<button>입금확인</button>
				<button>거절</button>
			</div>
		</div>
	);
}
