import { AddressFormDTO, ConditionListModel } from "../../../shared";
import { useEffect, useRef, useState } from "react";
import style from "../ConditionBox.module.scss"

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
			keyof AddressFormDTO,
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

	function onChange(inputValue: string, targetFilter: keyof AddressFormDTO) {
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
			<button
				className={`btn ${
					isActive == false ? "btn-light" : "btn-dark"
				} btn-lg dropdown-toggle ${style.btnbox}`}
				data-bs-toggle="dropdown"
				aria-expanded="false"
				data-bs-auto-close="true"
				style={{width:180, height:60}}
			>
				{title}
			</button>
			<div className="dropdown-menu">
				<form className="p-4">
					<div className="mb-3">
						<input
							type="text"
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
									const inputValue = (
										e.target as HTMLInputElement
									).value;
									onChange(inputValue, "sido");
								}
								setActive(true);
							}}
						/>
					</div>
					<div className="mb-3">
						<input
							type="text"
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
									const inputValue = (
										e.target as HTMLInputElement
									).value;
									onChange(inputValue, "sigungu");
									setActive(true);
								}
							}}
						/>
					</div>
					<div className="mb-3">
						<input
							type="text"
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
									const inputValue = (
										e.target as HTMLInputElement
									).value;
									onChange(inputValue, "eupmyundong");
									setActive(true);
								}
							}}
						/>
					</div>
					<a
						className="btn btn-dark"
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setConditionData({
								...conditionData,
								address: new AddressFormDTO(),
							});
							setActive(false);
						}}
					>
						clear
					</a>
				</form>
			</div>
		</div>
	);
}

export default AddressCondition;
