import { except, labelColumnsMap } from "../util/columns";
import style from "../MemberEdit.module.scss";
import { AddressFormDTO } from "../../../shared/shared";

interface FormAddressProps {
	column: keyof AddressFormDTO;
	type?: string;
	getValue: (column: keyof AddressFormDTO) => string;
	onChange: (e: any) => void;
}
export function FormAddress({
	column,
	type,
	getValue,
	onChange,
}: FormAddressProps) {
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
			/>
		</div>
	);
}
