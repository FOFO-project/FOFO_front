import { useEffect, useRef, useState } from "react";
import { ConditionListModel, Mbti, Toggle } from "../../../shared";
import styles from "../ConditionBox.module.scss";
import Select from "react-select";

interface SelectConditionProps {
	title: string;
	targetColumn: keyof ConditionListModel;
	conditionData: ConditionListModel;
	setConditionData: Function;
	type: { [s: string]: any };
}
export function SelectCondition({
	title,
	targetColumn,
	conditionData,
	setConditionData,
	type,
}: SelectConditionProps) {
	const [isActive, setActive] = useState(false);
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	function setAllActive(arg: boolean) {
		setActive(arg);
		setMenuIsOpen(arg);
	}
	const LabelAsValueMap = new Map();
	Object.entries(type).forEach(([key, value]) => {
		LabelAsValueMap.set(value, key);
	});
	const Options = Object.entries({ 없음: null, ...type }).map(
		([name, value]) => {
			return { value: value, label: name };
		}
	);

	return (
		<div className={styles.item}>
			<button
				className={styles.ToggleButton}
				onClick={() => setAllActive(true)}
			>
				{title}
			</button>
			<Toggle isActive={isActive} setActive={setAllActive}>
				<Select
					closeMenuOnSelect={true}
					options={Options}
					menuIsOpen={menuIsOpen}
					onChange={(newValue) => {
						setConditionData({
							...conditionData,
							[targetColumn]: newValue?.value,
						});
					}}
					onMenuOpen={() => setAllActive(true)}
					onMenuClose={() => setAllActive(false)}
					defaultValue={{
						value: conditionData[targetColumn],
						label: LabelAsValueMap.get(conditionData[targetColumn]),
					}}
				/>
			</Toggle>
		</div>
	);
}
