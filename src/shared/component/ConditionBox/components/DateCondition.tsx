import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ConditionListModel, Toggle } from "../../../shared";
import { useEffect, useReducer, useRef, useState } from "react";
import styles from "../ConditionBox.module.scss";

interface DateConditionProps {
	title: string;
	targetColumn: keyof ConditionListModel;
	conditionData: ConditionListModel;
	setCondtitionData: Function;
}
export function DateCondition({
	title,
	targetColumn,
	conditionData,
	setCondtitionData,
}: DateConditionProps) {
	const [isActive, setActive] = useState(false);
	const datePickerRef = useRef<DatePicker>(null);

	useEffect(() => {
		datePickerRef.current?.setFocus();
	});

	return (
		<div className={styles.item}>
			<div
				className={styles.ToggleButton}
				onClick={() => setActive(true)}
			>
				{title}
			</div>
			<Toggle isActive={isActive} setActive={setActive}>
				<DatePicker
					ref={datePickerRef}
					id="datePicker"
					selected={conditionData[targetColumn] as Date}
					onChange={(date: Date) => {
						setCondtitionData({
							...conditionData,
							[targetColumn]: date,
						});
					}}
					dateFormat="yyyy-MM-dd"
				/>
				<button
					onClick={() => {
						setCondtitionData({
							...conditionData,
							[targetColumn]: undefined,
						});
						setActive(false);
					}}
				>
					clear
				</button>
			</Toggle>
		</div>
	);
}

export default DateCondition;
