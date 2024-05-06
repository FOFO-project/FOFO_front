import { except, labelColumnsMap } from "../util/columns";
import style from "../MemberForm.module.scss";
import { AppendMemberRequestDto } from "../../../shared/shared";
import { inputLimit } from "../../../shared/type/Enum/memberEnum";

interface FormInputProps {
	column: keyof AppendMemberRequestDto;
	type?: string;
	getValue: (column: keyof AppendMemberRequestDto) => string;
	onChange: (e: any) => void;
}
export function FormInput({
	column,
	type,
	getValue,
	onChange,
}: FormInputProps) {
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
				type={type ? type : "text"}
				className="form-control"
				id={column}
				name={column}
				value={getValue(column)}
				onChange={onChange}
				maxLength={inputLimit.get(column)}
			/>
		</div>
	);
}
