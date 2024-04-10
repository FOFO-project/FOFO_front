import { useEffect, useRef, useState } from "react";
import { ConditionListModel, Toggle } from "../../../shared";
import styles from "../ConditionBox.module.scss";

interface StringConditionProps {
	title: string;
	targetColumn: keyof ConditionListModel;
	conditionData: ConditionListModel;
	setCondtitionData: Function;
}
export function StringCondition({
	title,
	targetColumn,
	conditionData,
	setCondtitionData,
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
			<div
				className={styles.ToggleButton}
				onClick={() => setActive(true)}
			>
				{title}
			</div>
			<Toggle isActive={isActive} setActive={setActive}>
				<input
					ref={inputRef}
					autoFocus={true}
					onInput={(e) => {
						const inputValue = (e.target as HTMLInputElement).value;
						setCondtitionData({
							...conditionData,
							[targetColumn]: inputValue,
						});
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setActive(false);
						}
					}}
				/>
				<button
					onClick={() => {
						setCondtitionData({
							...conditionData,
							[targetColumn]: undefined,
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
