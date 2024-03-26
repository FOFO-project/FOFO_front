import { cloneElement, ReactElement, useState } from "react";
import styles from "./styles.module.scss";
import { Condition } from "../../shared_types";

interface ConditionedListProps<T extends ReactElement> {
	initItems?: T[];
	conditionList: Condition[];
}

function makeConditionBox(condition: Condition) {
	const { name, type, valueList } = condition;
	if (type === "string") {
		return <input></input>;
	} else if (type === "select") {
		return <option></option>;
	}
	return;
}

export function ConditionedList<T extends ReactElement>({
	initItems,
}: ConditionedListProps<T>) {
	const [items, setItems] = useState<T[] | undefined>(initItems);
	return (
		<div className={styles.container}>
			<div className={styles.condition_panel}></div>
			<div className={styles.list_panel}>
				{items?.map((element, i) => {
					return cloneElement(element as ReactElement, {
						key: i,
					});
				})}
			</div>
		</div>
	);
}
