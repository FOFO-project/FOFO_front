import { useEffect, useRef, useState } from "react";
import { ConditionListModel, Toggle } from "../../../shared";
import styles from "../ConditionBox.module.scss";

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
	const [isActive, setActive] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.value =
				conditionData[targetColumn]?.toString() || "";
		}
	});

	return (
		<div className={styles.item}>
			<button
				className={styles.ToggleButton}
				onClick={() => setActive(true)}
			>
				{title}
			</button>
			<Toggle isActive={isActive} setActive={setActive}>
				<div>
					<input
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
								setActive(false);
							}
						}}
					/>
				</div>
				<button
					onClick={() => {
						setConditionData({
							...conditionData,
							[targetColumn]: null,
						});
						setActive(false);
					}}
				>
					clear
				</button>
			</Toggle>
		</div>
	);
}
