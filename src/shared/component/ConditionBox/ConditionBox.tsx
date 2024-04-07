import { ConditionListModel } from "../../shared";
import { DateCondition } from "./components/DateCondition";
import { StringCondition } from "./components/StringCondition";
import styles from "./ConditionBox.module.scss";

interface ConditionBoxProps {
	state: ConditionListModel;
	dispatch: Function;
}
export function ConditionBox({ state, dispatch }: ConditionBoxProps) {
	return (
		<div className={styles.container}>
			<DateCondition
				state={state}
				dispatch={dispatch}
				title="나이"
				targetColumn="age"
			></DateCondition>
			<StringCondition
				state={state}
				dispatch={dispatch}
				title="사는 지역"
				targetColumn="address_cate"
			></StringCondition>
		</div>
	);
}
