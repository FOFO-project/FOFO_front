import { cloneElement, ReactElement, useEffect, useRef } from "react";
import styles from "../styles.module.scss";
import classNames from "classnames";
import { Condition, Ordering, OrderingList } from "../../../shared";

interface OrderingBoxProps {
	ordering: Ordering;
	onClick: (ordering: Ordering) => undefined;
}
function OrderingBox({ ordering, onClick }: OrderingBoxProps) {
	const colorClass =
		ordering.orderDir === 1
			? styles.ascending
			: ordering.orderDir === -1
			? styles.decending
			: styles.none_select;
	return (
		<div className={styles.ordering_item}>
			<div
				className={classNames(
					colorClass,
					styles.name,
					styles.padding_border
				)}
			>
				{ordering.condition.name}
			</div>
			<button
				onClick={() => {
					onClick(ordering);
				}}
			>
				X
			</button>
		</div>
	);
}

interface OrderingListPanelProps {
	orderingList: OrderingList;
	onClick: (ordering: Ordering) => undefined;
}
export function OrderingListPanel({
	orderingList,
	onClick,
}: OrderingListPanelProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			container.scrollLeft = container.scrollWidth;
		}
	}, [orderingList.list.length]);
	return (
		<div
			ref={containerRef}
			className={classNames(
				styles.ordering_list_panel,
				styles.padding_border
			)}
		>
			{orderingList.list.map((ordering, i) => {
				return (
					<OrderingBox
						key={i}
						ordering={ordering}
						onClick={onClick}
					/>
				);
			})}
		</div>
	);
}
