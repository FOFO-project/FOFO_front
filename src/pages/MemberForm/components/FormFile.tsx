import { except, labelColumnsMap } from "../util/columns";
import style from "../MemberForm.module.scss";
import { AppendMemberRequestDto } from "../../../shared/shared";
import { useState } from "react";

interface FormFileProps {
	column: keyof AppendMemberRequestDto;
	setFormData: Function;
}
export function FormFile({ column, setFormData }: FormFileProps) {
	const [files, setFiles] = useState<File[]>([]);
	const mandatoryMark = (cols: string) => {
		return except.includes(cols) ? null : (
			<span className={style.mandatory_mark}>*</span>
		);
	};
	function updateForm(value: any) {
		setFormData((prevData: any) => ({
			...prevData,
			[column]: value,
		}));
	}
	const onChange = [
		(e: any) => {
			const file = e.target.files[0];
			if (file) {
				let newFiles = files ? files.slice() : [];
				newFiles[0] = file;
				setFiles(newFiles);
				updateForm(newFiles.filter((f) => f));
			} else {
				setFiles([]);
				updateForm(null);
			}
		},
		(e: any) => {
			let newFiles = files.slice();
			newFiles[1] = e.target.files[0];
			setFiles(newFiles);
			updateForm(newFiles.filter((f) => f));
		},
		(e: any) => {
			let newFiles = files.slice();
			newFiles[2] = e.target.files[0];
			setFiles(newFiles);
			updateForm(newFiles.filter((f) => f));
		},
	];
	return (
		<div className="mb-3">
			{mandatoryMark(column)}
			<label className="form-label">{labelColumnsMap[column]}</label>
			<h6>메인 프로필</h6>
			<input
				type="file"
				className="form-control"
				accept="image/*"
				onChange={onChange[0]}
			/>
			{files[0] ? (
				<>
					<h6>+</h6>
					<input
						type="file"
						className="form-control"
						accept="image/*"
						onChange={onChange[1]}
					/>
					<input
						type="file"
						className="form-control"
						accept="image/*"
						onChange={onChange[2]}
					/>
				</>
			) : (
				""
			)}
		</div>
	);
}
