import { Address, ConditionListModel } from "../../../shared";
import { useEffect, useRef, useState } from "react";

interface AddressConditionProps {
	title: string;
	conditionData: ConditionListModel;
	setConditionData: Function;
}
export function AddressCondition({
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
		<div className={`dropdown`}>
			<button className={`btn ${isActive == false ? 'btn-outline-dark' : 'btn-dark'} btn-lg dropdown-toggle`}
					data-bs-toggle="dropdown" 
					aria-expanded="false"
					data-bs-auto-close="true"
					>
				{title}
			</button>
			<form className="dropdown-menu p-4">
				<div className="mb-3">
					<input type="text" 
						className="form-control" 
						ref={REF.sido}
						placeholder="시도"
						autoFocus={true}
						onInput={(e) => {
							const inputValue = (e.target as HTMLInputElement)
								.value;
							onChange(inputValue, "sido");
							setActive(true);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								const inputValue = (e.target as HTMLInputElement)
									.value;
								onChange(inputValue, "sido");
							}
							setActive(true);
						}}
					/>
				</div>
				<div className="mb-3">
					<input type="text" 
						className="form-control" 
						ref={REF.sigungu}
						placeholder="시군구"
						autoFocus={true}
						onInput={(e) => {
							const inputValue = (e.target as HTMLInputElement)
								.value;
							onChange(inputValue, "sigungu");
							setActive(true);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								const inputValue = (e.target as HTMLInputElement)
									.value;
								onChange(inputValue, "sigungu");
								setActive(true);
							}
						}}
					/>
				</div>
				<div className="mb-3">
					<input type="text" 
						className="form-control" 
						ref={REF.eupmyundong}
						placeholder="읍면동"
						autoFocus={true}
						onInput={(e) => {
							const inputValue = (e.target as HTMLInputElement)
								.value;
							onChange(inputValue, "eupmyundong");
							setActive(true);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								const inputValue = (e.target as HTMLInputElement)
									.value;
								onChange(inputValue, "eupmyundong");
								setActive(true);
							}
						}}
					/>
				</div>
				<a className="btn btn-dark"
					href="#"
					onClick={(e) => {
						e.preventDefault();
						setConditionData({
							...conditionData,
							address: new Address(),
						});
						setActive(false);
					}}
					>clear
				</a>
			</form>
		</div>
	);
}

export default AddressCondition;
