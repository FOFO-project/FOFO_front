import { cloneElement, ReactElement, useEffect } from "react";
import styles from "../styles.module.scss";
import classNames from "classnames";
import { OrderingList } from "../../../shared";

interface ItemListPanelProps<T extends ReactElement> {
	items: T[];
	orderingList: OrderingList;
}
export function ItemListPanel<T extends ReactElement>({
	items,
	orderingList,
}: ItemListPanelProps<T>) {
	function sortItems(items: T[], orderingList: OrderingList): T[] {
		return items.sort((a: ReactElement, b: ReactElement) => {
			for (const ordering of orderingList.list.slice().reverse()) {
				const [aValue, bValue] = [a, b].map((e: ReactElement) => {
					return e.props.data[ordering.condition.value];
				});
				if (aValue < bValue) {
					return ordering.orderDir * -1;
				} else if (aValue > bValue) {
					return ordering.orderDir * 1;
				}
			}
			return 0; // Items are equal based on all conditions
		});
	}
	return (
		<div
			className={classNames(
				styles.item_list_panel,
				styles.padding_border
			)}
		>
			{sortItems(items, orderingList).map((e, i) => {
				return cloneElement(e as ReactElement, {
					key: i,
				});
			})}
		</div>
	);
}
