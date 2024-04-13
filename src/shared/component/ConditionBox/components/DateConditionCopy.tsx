import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ConditionListModel, Toggle } from "../../../shared";
import { useEffect, useReducer, useRef, useState } from "react";
import styles from "../ConditionBox.module.scss";

interface DateConditionProps {
	title: string;
	targetColumn: keyof ConditionListModel;
	conditionData: ConditionListModel;
	setConditionData: Function;
}
export function DateConditionCopy({
	title,
	targetColumn,
	conditionData,
	setConditionData,
}: DateConditionProps) {
	const [isActive, setActive] = useState(false);
	const datePickerRef = useRef<DatePicker>(null);

	//달력 활성화
	// useEffect(() => {
	// 	datePickerRef.current?.setFocus();
	// });

	return (
		<div className="col dropdown">
			<button
				className="btn btn-outline-dark btn-sm dropdown-toggle"
				data-bs-toggle="dropdown" 
				onClick={() => setActive(true)}
			>
				{title}
			</button>
			<ul className="dropdown-menu">
				<li>
					<div>
						<DatePicker className="dropdown-item"
							ref={datePickerRef}
							id="datePicker"
							selected={conditionData[targetColumn] as Date}
							onChange={(date: Date) => {
								setConditionData({
									...conditionData,
									[targetColumn]: date,
								});
							}}
							dateFormat="yyyy-MM-dd"
						/>
					</div>
					<button
						onClick={() => {
							setConditionData({
								...conditionData,
								[targetColumn]: null,
							});
							setActive(false);
						}}
					>
						clear
					</button>
				</li>
			</ul>
		</div>
	);
}

export default DateConditionCopy;
