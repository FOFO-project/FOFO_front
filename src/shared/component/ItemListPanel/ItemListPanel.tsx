import { cloneElement, ReactElement, useEffect } from "react";
import styles from "./ItemListPanel.module.scss";
import classNames from "classnames";

interface ItemListPanelProps<T extends ReactElement> {
	items: T[];
}
export function ItemListPanel<T extends ReactElement>({
	items,
}: ItemListPanelProps<T>) {
	return (
		<div
			className={classNames(
				styles.item_list_panel,
				styles.padding_border
			)}
		>
			{items.map((e, i) => {
				return cloneElement(e as ReactElement, {
					key: i,
				});
			})}
		</div>
	);
}
