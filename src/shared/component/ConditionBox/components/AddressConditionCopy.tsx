import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Address, ConditionListModel, ToggleCopy } from "../../../shared";
import { useEffect, useReducer, useRef, useState } from "react";
import styles from "../ConditionBox.module.scss";

interface AddressConditionProps {
	title: string;
	conditionData: ConditionListModel;
	setConditionData: Function;
}
export function AddressConditionCopy({
	title,
	conditionData,
	setConditionData,
}: AddressConditionProps) {
	const [isActive, setActive] = useState(false);
	const REF = {
		sido: useRef<HTMLInputElement>(null),
		sigungu: useRef<HTMLInputElement>(null),
		eupmyundong: useRef<HTMLInputElement>(null),
	};

	useEffect(() => {
		for (const [name, ref] of Object.entries(REF) as [
			keyof Address,
			any //React.RefObject<HTMLInputElement>
		][]) {
			if (ref.current) {
				try {
					ref.current.value = conditionData.address?.[name];
				} catch {
					ref.current.value = "";
				}
			}
		}
	});

	function onChange(inputValue: string, targetFilter: keyof Address) {
		const address = conditionData.address;
		setConditionData({
			...conditionData,
			address: Object.assign(address, {
				[targetFilter]: inputValue === "" ? null : inputValue,
			}),
		});
	}

	return (
		<div className="col dropdown">
			<button className="btn btn-outline-dark btn-sm dropdown-toggle" 
					data-bs-toggle="dropdown" 
					onClick={() => setActive(true)}
					>
				{title}
			</button>
			<ul className="dropdown-menu">
				<div>
					<input
						ref={REF.sido}
						placeholder="시도"
						onInput={(e) => {
							const inputValue = (e.target as HTMLInputElement)
								.value;
							onChange(inputValue, "sido");
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								const nextElement = (e.target as any)
									.nextElementSibling;
								if (nextElement) {
									nextElement.focus();
								}
							}
						}}
					/>
					<input
						ref={REF.sigungu}
						placeholder="시군구"
						onInput={(e) => {
							const inputValue = (e.target as HTMLInputElement)
								.value;
							onChange(inputValue, "sigungu");
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								const nextElement = (e.target as any)
									.nextElementSibling;
								if (nextElement) {
									nextElement.focus();
								}
							}
						}}
					/>
					<input
						ref={REF.eupmyundong}
						placeholder="읍면동"
						onInput={(e) => {
							const inputValue = (e.target as HTMLInputElement)
								.value;
							onChange(inputValue, "eupmyundong");
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setActive(false);
							}
						}}
					/>
				</div>
				<button
					onClick={() => {
						setConditionData({
							...conditionData,
							address: new Address(),
						});
						setActive(false);
					}}
				>
					clear
				</button>
			</ul>
		</div>
	);
}

export default AddressConditionCopy;
