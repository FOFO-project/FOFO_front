import { cloneElement, ReactElement, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Condition, OrderDir } from "../../shared_types";

//인자를 받아서
interface ConditionedListProps<T extends ReactElement> {
	items: T[];
	setItems: Function;
	columnFixItem?: Condition[];
}
export function ConditionedList<T extends ReactElement>({
	items,
	setItems,
	columnFixItem,
}: ConditionedListProps<T>) {
	//item으로 칼럼 목록 재생성
	function getItemsColumnList(items: T[]) {
		return items[0]
			? Object.keys(items[0].props).map((prop): Condition => {
					return { name: prop, value: prop };
			  })
			: [];
	}
	//정렬기준, 리스트를 기반으로 항목 생성
	function generateList(items: T[], orderDirs: OrderDir[]) {
		return items.map((element, i) => {
			return cloneElement(element as ReactElement, {
				key: i,
			});
		});
	}

	const initConditions = columnFixItem ?? getItemsColumnList(items);
	const [conditions, setConditions] = useState<Condition[]>(initConditions);
	const [orderDirs, setOrderDirs] = useState<OrderDir[]>(
		initConditions.map(() => null)
	);
	let ListPanel = generateList(items, orderDirs);
	useEffect(() => {
		//만일 item 기반 칼럼이라면, item 목록 변경 시 조건 목록 업데이트
		if (columnFixItem === undefined) {
			const newColumns = getItemsColumnList(items);
			//신규 조건 목록이 다를 경우, 조건 목록 갱신
			if (JSON.stringify(conditions) !== JSON.stringify(newColumns))
				setConditions(newColumns);
		}
	}, [items]);
	useEffect(() => {
		//조건 목록 변경 시 정렬 기준 초기화
		setOrderDirs(conditions.map(() => null));
	}, [conditions]);
	useEffect(() => {
		//정렬 내용 변경 시 리스트 업데이트
		ListPanel = generateList(items, orderDirs);
	}, [orderDirs]);
	return (
		<div className={styles.container}>
			<div className={styles.condition_panel}>
				{conditions.toString()}
			</div>
			<div className={styles.list_panel}>{ListPanel}</div>
		</div>
	);
}
