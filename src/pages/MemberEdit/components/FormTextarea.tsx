import { except, labelColumnsMap } from "../util/columns";
import style from "../MemberEdit.module.scss";
import { UpdateMemberRequestDto } from "../../../shared/shared";

interface FormTextareaProps {
	column: keyof UpdateMemberRequestDto;
	getValue: (column: keyof UpdateMemberRequestDto) => string;
	onChange: (e: any) => void;
}
export function FormTextarea({
	column,
	getValue,
	onChange,
}: FormTextareaProps) {
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
			<textarea
				className="form-control"
				id={column}
				name={column}
				value={getValue(column)}
				onChange={onChange}
			/>
		</div>
	);
}
