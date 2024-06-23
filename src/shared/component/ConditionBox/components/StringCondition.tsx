import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { ConditionListModel } from "../../../shared";
import style from "../ConditionBox.module.scss";
import classNames from "classnames";

interface StringConditionProps {
	title: string;
	targetColumn: keyof ConditionListModel;
	conditionData: ConditionListModel;
	setConditionData: Function;
}
export function StringCondition({
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

	const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			const inputValue = e.currentTarget.value;
			setConditionData({
				...conditionData,
				[targetColumn]: inputValue === "" ? null : inputValue,
			});
			setActive(true);
		}
	};

	return (
		<div className="dropdown">
			<button
				className={`btn ${
					isActive ? "btn-dark" : "btn-light"
				} btn-lg dropdown-toggle ${style.btnbox}`}
				data-bs-toggle="dropdown"
				aria-expanded="false"
				data-bs-auto-close="true"
			>
				{title}
			</button>
			<div className={classNames("dropdown-menu", style.dropdownMenu)}>
				<form className="p-2">
					<div className="mb-3">
						<input
							type="text"
							className={classNames("form-control", style.input)}
							ref={inputRef}
							autoFocus={true}
							onInput={(e) => {
								const inputValue = (
									e.target as HTMLInputElement
								).value;
								setConditionData({
									...conditionData,
									[targetColumn]:
										inputValue === "" ? null : inputValue,
								});
								setActive(true);
							}}
							onKeyDown={handleInputKeyDown}
						/>
					</div>
					<a
						className={classNames("btn btn-dark", style.a)}
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setConditionData({
								...conditionData,
								[targetColumn]: null,
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
