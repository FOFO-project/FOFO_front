import { ChangeEventHandler, useState } from "react";
import { AppendMemberRequestDto, Fomatter } from "../../../shared/shared";

export function useFormData(initData: AppendMemberRequestDto): [
	AppendMemberRequestDto,
	{
		setFormData: Function;
		handleHeightChange: ChangeEventHandler;
		handlePhoneNumberChange: ChangeEventHandler;
		handleDateChange: ChangeEventHandler;
		handleChange: ChangeEventHandler;
		handleAddressChange: ChangeEventHandler;
	}
] {
	const [formData, setFormData] = useState(
		new AppendMemberRequestDto(initData)
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
			[name]: value.length === 0 ? null : value,
		}));
	};
	const handleAddressChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			address: {
				...prevData.address,
				[name]: value.length === 0 ? null : value,
			},
		}));
	};
	const setters = {
		setFormData,
		handleHeightChange,
		handlePhoneNumberChange,
		handleDateChange,
		handleChange,
		handleAddressChange,
	};

	return [formData, setters];
}
