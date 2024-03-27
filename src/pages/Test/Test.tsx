import { ConditionedList } from "../../shared/shared";
import { TestEntity } from "../../entities/entities";
import styles from "../pages.module.scss";
import { useState } from "react";

export function Test() {
	// TestEntity가 만드는 Element를 타입으로 가져옴
	type TestEntityElement = ReturnType<typeof TestEntity>;

	const [items, setItems] = useState<TestEntityElement[]>([
		<TestEntity text="A" />,
		<TestEntity text="B" />,
		<TestEntity text="C" />,
	]);

	return (
		<div className={styles.Page}>
			<ConditionedList<TestEntityElement>
				items={items}
				setItems={setItems}
				// columnFixItem={[
				// 	{ name: "colA", value: "A" },
				// 	{ name: "colB", value: "B" },
				// 	{ name: "colC", value: "C" },
				// ]}
			/>
			<button onClick={() => setItems([])}>test</button>
		</div>
	);
}
