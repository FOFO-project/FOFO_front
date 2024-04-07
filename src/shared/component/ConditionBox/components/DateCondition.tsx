import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ConditionListModel, Popup } from "../../../shared";
import { useReducer, useState } from "react";
import styles from "../ConditionBox.module.scss";

interface DateConditionProps {
	state: ConditionListModel;
	dispatch: Function;
	title: string;
	targetColumn: keyof ConditionListModel;
}
export function DateCondition({
	state,
	dispatch,
	title,
	targetColumn,
}: DateConditionProps) {
	const [isActive, toggleActive] = useReducer((isActive: boolean) => {
		return !isActive;
	}, false);
	const [date, setDate] = useState<Date | null>(null);
	const handleDateChange = (date: Date | null) => {
		const params: any = {};
		params[targetColumn] = date;
		dispatch({ type: "set", params: params });
		setDate(date);
	};

	return (
		<div className={styles.item}>
			<div onClick={toggleActive}>{title}</div>
			<Popup isActive={isActive} toggleActive={toggleActive}>
				<DatePicker
					id="datePicker"
					selected={date}
					onChange={handleDateChange}
					dateFormat="yyyy-MM-dd"
				/>
				<button>조건지우기</button>
			</Popup>
		</div>
	);
}

export default DateCondition;
