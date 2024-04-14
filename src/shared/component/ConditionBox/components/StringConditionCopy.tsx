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
	const [isActive, setActive] = useState(false);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.value =
				conditionData[targetColumn]?.toString() || "";
		}
	});

	return (
		<div className="col dropdown">
			<button className={`btn ${isActive == false ? 'btn-outline-dark' : 'btn-dark'} btn-lg dropdown-toggle`}
					data-bs-toggle="dropdown" 
					aria-expanded="false"
					data-bs-auto-close="true">
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
							setActive(true);
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
							[targetColumn]: null,
						});
						setActive(false);
					}}
					>clear
				</a>
			</form>
		</div>
	);
}
