export interface Condition {
	name: string;
	value: string;
}

export type OrderDir = -1 | 1 | 0;
export type Ordering = {
	condition: Condition;
	orderDir: OrderDir;
};

export class OrderingList {
	list: Ordering[] = [];
	add(ordering: Ordering) {
		this.delete(ordering.condition);
		this.list.push(ordering);
	}
	delete(condition: Condition) {
		this.list = this.list.filter(
			(ordering) => ordering.condition.value !== condition.value
		);
	}
}
