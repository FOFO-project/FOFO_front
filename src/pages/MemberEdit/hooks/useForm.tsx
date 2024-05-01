import { ChangeEventHandler, useState } from "react";
import { UpdateMemberRequestDto, Fomatter } from "../../../shared/shared";

export function useFormData(initData: UpdateMemberRequestDto): [
	UpdateMemberRequestDto,
	{
		setFormData: Function;
		handleHeightChange: ChangeEventHandler;
		handlePhoneNumberChange: ChangeEventHandler;
		handleDateChange: ChangeEventHandler;
		handleChange: ChangeEventHandler;
	},
	{
		getValue: (column: keyof UpdateMemberRequestDto) => string;
		getDateValue: (column: keyof UpdateMemberRequestDto) => string;
	}
] {
	const [formData, setFormData] = useState(
		new UpdateMemberRequestDto(initData)
	);
	const handleHeightChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: Fomatter.HeightFormat(value),
		}));
	};
	const handlePhoneNumberChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: Fomatter.PhoneNumber(value),
		}));
	};
	const handleDateChange = (e: any) => {
		let { name, value } = e.target;
		value = new Date(value).toISOString();
		setFormData((prevData) => ({
			...prevData,
			[name]: value.length === 0 ? null : value,
		}));
	};
	const handleChange = (e: any) => {
		let { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]:
				value.length === 0
					? null
					: typeof value === "string"
					? value
					: value,
		}));
	};

	const setters = {
		setFormData,
		handleHeightChange,
		handlePhoneNumberChange,
		handleDateChange,
		handleChange,
	};

	const getters = {
		getValue: (column: keyof UpdateMemberRequestDto): string => {
			return formData[column] ? formData[column] + "" : "";
		},
		getDateValue: (column: keyof UpdateMemberRequestDto): string => {
			return formData[column]
				? new Date(formData[column] as string)
						.toISOString()
						.substr(0, 10)
				: "";
		},
	};

	return [formData, setters, getters];
}
