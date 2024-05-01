import { except, labelColumnsMap } from "../util/columns";
import style from "../MemberEdit.module.scss";
import { UpdateMemberRequestDto } from "../../../shared/shared";

interface FormSelectProps {
	column: keyof UpdateMemberRequestDto;
	options: [string, string][];
	onChange: (e: any) => void;
}

export function FormSelect({ column, options, onChange }: FormSelectProps) {
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
			<select
				className="form-select"
				id={column}
				name={column}
				onChange={onChange}
			>
				{options.map(([key, value]) => (
					<option key={key} value={key}>
						{value}
					</option>
				))}
			</select>
		</div>
	);
}
