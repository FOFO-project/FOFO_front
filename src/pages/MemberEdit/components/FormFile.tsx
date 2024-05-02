import { labelColumnsMap } from "../util/columns";
import { UpdateMemberRequestDto } from "../../../shared/shared";
import { useState } from "react";

interface FormFileProps {
	column: keyof UpdateMemberRequestDto;
	setFormData: Function;
}
export function FormFile({ column, setFormData }: FormFileProps) {
	const [file, setFile] = useState<File>();

	function updateForm(value: any) {
		setFormData(() => ({
			[column]: value,
		}));
	}

	const onChange = (e: any) => {
		const updatefile = e.target.file;
		console.log(updatefile);
		if (updatefile) {
			let newFile = updatefile ? updatefile : file;
			setFile(newFile);
			updateForm(newFile);
		} else {
			setFile(undefined);
			updateForm(null);
		}
	};

	return (
		<div className="mb-3">
			<label className="form-label">{labelColumnsMap[column]}</label>
			<input
				type="file"
				className="form-control"
				accept="image/*"
				onChange={onChange}
			/>
		</div>
	);
}
