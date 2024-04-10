import { useState } from "react";
import { ConditionListModel } from "../../shared";
import { DateCondition } from "./components/DateCondition";
import { StringCondition } from "./components/StringCondition";
import styles from "./ConditionBox.module.scss";

export function ConditionBox() {
	const [conditionData, setCondtitionData] = useState(
		new ConditionListModel()
	);
	return (
		<div className={styles.container}>
			<DateCondition
				title="태어난날짜"
				targetColumn="birthday"
				conditionData={conditionData}
				setCondtitionData={setCondtitionData}
			/>
			<StringCondition
				title="회사"
				targetColumn="company"
				conditionData={conditionData}
				setCondtitionData={setCondtitionData}
			/>
			<StringCondition
				title="직무"
				targetColumn="job"
				conditionData={conditionData}
				setCondtitionData={setCondtitionData}
			/>
			<StringCondition
				title="출신 학교"
				targetColumn="university"
				conditionData={conditionData}
				setCondtitionData={setCondtitionData}
			/>
		</div>
	);
}
