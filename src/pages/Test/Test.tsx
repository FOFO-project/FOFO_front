import { ConditionedList } from "../../shared/shared";
import { TestEntity } from "../../entities/entities";
import { Condition } from "../../shared/shared_types";
import styles from "../pages.module.scss";

export function Test() {
	const initItems = [
		<TestEntity text="A" />,
		<TestEntity text="B" />,
		<TestEntity text="C" />,
	];
	return (
		<div className={styles.Page}>
			<ConditionedList
				initItems={initItems}
				conditionList={
					[
						{ name: "condition A", type: "string" },
						{ name: "condition B", type: "string" },
						{
							name: "condition C",
							type: "select",
							valueList: ["item1", "item2"],
						},
					] as Condition[]
				}
			/>
		</div>
	);
}
