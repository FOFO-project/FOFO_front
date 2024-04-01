import { ConditionedList } from "../../shared/shared";
import { MemberInformation } from "../../entities/entities";
import styles from "../pages.module.scss";
import { useState } from "react";
import { testData } from "./testData";

export function Test() {
	const [items, setItems] = useState(
		testData.map((e) => <MemberInformation data={e} />)
	);
	return (
		<div className={styles.Page}>
			<div className={styles.container}>
				<ConditionedList
					items={items}
					setItems={setItems}
					conditionList={[
						"name",
						"gender",
						"age",
						"company",
						"job",
						"university",
						"mbti",
						"smoking_yn",
						"kakao_id",
						"religion",
						"deposit_date",
						"note",
						"pass_count",
						"chance",
					].map((e) => {
						return { name: e, value: e };
					})}
				/>
			</div>
		</div>
	);
}
