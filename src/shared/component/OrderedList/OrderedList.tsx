import { ReactElement, useReducer, useState } from "react";
import styles from "./styles.module.scss";
import { Condition, Ordering, OrderingList } from "../../shared";
import { ItemListPanel } from "./components/ItemListPanel";
import { ConditionListPanel } from "./components/ConditionListPanel";
import { OrderingListPanel } from "./components/OrderingListPanel";

interface OrderedListProps<T extends ReactElement> {
	items: T[];
	setItems: Function;
	conditionList: Condition[];
}
export function OrderedList<T extends ReactElement>({
	items,
	setItems,
	conditionList,
}: OrderedListProps<T>) {
	const [_, forceUpdate] = useReducer((x) => x + 1, 0);
	const [orderingList] = useState(new OrderingList());
	function onOrderingChanged(ordering: Ordering) {
		orderingList.add(ordering);
		forceUpdate();
		return undefined;
	}
	function onOrderingDelete(ordering: Ordering) {
		orderingList.delete(ordering.condition);
		forceUpdate();
		return undefined;
	}

	return (
		<div className={styles.container}>
			<ConditionListPanel
				conditionList={conditionList}
				onClick={onOrderingChanged}
			/>
			<OrderingListPanel
				orderingList={orderingList}
				onClick={onOrderingDelete}
			/>
			<ItemListPanel items={items} orderingList={orderingList} />
		</div>
	);
}
