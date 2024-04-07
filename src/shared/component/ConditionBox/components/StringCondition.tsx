import { useReducer, useRef } from "react";
import { ConditionListModel, Popup } from "../../../shared";
import styles from "../ConditionBox.module.scss";

interface StringConditionProps {
	state: ConditionListModel;
	dispatch: Function;
	title: string;
	targetColumn: keyof ConditionListModel;
}
export function StringCondition({
	state,
	dispatch,
	title,
	targetColumn,
}: StringConditionProps) {
	const [isActive, toggleActive] = useReducer((isActive: boolean) => {
		return !isActive;
	}, false);

	const inputRef = useRef<HTMLInputElement>(null);

	function handleStringChange() {
		const params: any = {};
		params[targetColumn] = inputRef.current?.value;
		dispatch({ type: "set", params: params });
	}

	function handleErase() {
		const params: any = {};
		inputRef.current!.value = "";
		dispatch({ type: "set", params: params });
	}

	return (
		<div className={styles.item}>
			<div onClick={() => toggleActive()}>{title}</div>
			<Popup isActive={isActive} toggleActive={toggleActive}>
				<input
					ref={inputRef} // Assign the ref to the input element
					value={state[targetColumn] as string}
					onChange={handleStringChange}
				/>
				<button onClick={handleErase}>조건지우기</button>
			</Popup>
		</div>
	);
}
