import { ConditionListModel, Mbti, Religion } from "../../shared";
import { DateCondition } from "./components/DateCondition";
import { StringCondition } from "./components/StringCondition";
import styles from "./ConditionBox.module.scss";
import { SelectCondition } from "./components/SelectCondition";
import { FilteringCondition } from "./components/FilteringCondition";
import AddressCondition from "./components/AddressCondition";

interface ConditionBoxProps {
	conditionData: ConditionListModel;
	setConditionData: Function;
	lastColumn: string;
}
export function ConditionBox({
	conditionData,
	setConditionData,
	lastColumn,
}: ConditionBoxProps) {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<button
					style={{
						width: "100%",
						height: "100%",
					}}
				>
					정렬
				</button>
			</div>
			<DateCondition
				title="태어난날짜"
				targetColumn="birthday"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<AddressCondition
				title="사는 지역"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<StringCondition
				title="회사"
				targetColumn="company"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<StringCondition
				title="직무"
				targetColumn="job"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<StringCondition
				title="출신 학교"
				targetColumn="university"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<SelectCondition
				title="MBTI"
				targetColumn="mbti"
				type={Mbti}
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<SelectCondition
				title="흡연여부"
				targetColumn="smoking_yn"
				type={{
					YES: true,
					NO: false,
				}}
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<SelectCondition
				title="종교"
				targetColumn="religion"
				type={Religion}
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<FilteringCondition
				title="절대 안되는 부분"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<StringCondition
				title="어필 사항"
				targetColumn="charming_point"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<div className={styles.item}>
				<button
					style={{
						width: "100%",
						height: "100%",
					}}
				>
					{lastColumn}
				</button>
			</div>
		</div>
	);
}
