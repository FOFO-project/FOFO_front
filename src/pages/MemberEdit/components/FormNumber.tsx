import { except, labelColumnsMap } from "../util/columns";
import style from "../MemberEdit.module.scss";
import { UpdateMemberRequestDto } from "../../../shared/shared";

interface FormNumberProps {
	column: keyof UpdateMemberRequestDto;
	getValue: (column: keyof UpdateMemberRequestDto) => string;
	onChange: (e: any) => void;
}
export function FormNumber({ column, onChange, getValue }: FormNumberProps) {
	const mandatoryMark = (cols: string) => {
		return except.includes(cols) ? null : (
			<span className={style.mandatory_mark}>*</span>
		);
	};
	return (
		<div className="mb-3">
			{mandatoryMark(column)}
			<label htmlFor={column} className="form-label">
				{labelColumnsMap[column]}
			</label>
			<input
				type="number"
				className="form-control"
				id={column}
				name={column}
				min="0"
				max="300"
				step="1"
				value={getValue(column)}
				onChange={onChange}
			/>
		</div>
	);
}
