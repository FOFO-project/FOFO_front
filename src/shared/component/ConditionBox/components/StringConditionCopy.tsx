import { useEffect, useRef, useState } from "react";
import { ConditionListModel } from "../../../shared";

interface StringConditionProps {
	title: string;
	targetColumn: keyof ConditionListModel;
	conditionData: ConditionListModel;
	setConditionData: Function;
}
export function StringConditionCopy({
	title,
	targetColumn,
	conditionData,
	setConditionData,
}: StringConditionProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.value =
				conditionData[targetColumn]?.toString() || "";
		}
	});

	return (
		<div className="col dropdown">
			<button className='btn btn-outline-dark btn-sm dropdown-toggle'
					data-bs-toggle="dropdown" 
					aria-expanded="false"
					data-bs-auto-close="outside">
				{title}
			</button>
			<form className="dropdown-menu p-2">
				<div className="mb-3">
					<input type="text" 
						className="form-control" 
						ref={inputRef}
						autoFocus={true}
						onInput={(e) => {
							const inputValue = (e.target as HTMLInputElement)
								.value;
							setConditionData({
								...conditionData,
								[targetColumn]:
									inputValue === "" ? null : inputValue,
							});
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								const inputValue = (e.target as HTMLInputElement)
								.value;
								setConditionData({
									...conditionData,
									[targetColumn]:
										inputValue === "" ? null : inputValue,
								});
							}
						}}
					/>
				</div>
				<a className="btn btn-outline-secondary"
					href="#"
					onClick={() => {
						setConditionData({
							...conditionData,
							[targetColumn]: null,
						});
					}}
					>clear
				</a>
			</form>
		</div>
	);
}
