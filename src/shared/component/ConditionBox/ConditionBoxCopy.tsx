import { useEffect, useState } from "react";
import { ConditionListModel, Mbti, Religion, SmokingYn } from "../../shared";
import { DateConditionCopy } from "./components/DateConditionCopy";
import { StringConditionCopy } from "./components/StringConditionCopy";
import { SelectConditionCopy } from "./components/SelectConditionCopy";
import { FilteringConditionCopy } from "./components/FilteringConditionCopy";
import AddressConditionCopy from "./components/AddressConditionCopy";

interface ConditionBoxProps {
	conditionData: ConditionListModel;
	setConditionData: Function;
	lastColumn: string;
}
export function ConditionBoxCopy({
	conditionData,
	setConditionData,
	lastColumn,
}: ConditionBoxProps) {
	return (
		<>
			<div className="col">
				<button className="btn btn-outline-dark btn-lg">
					정렬
				</button>
			</div>
			<DateConditionCopy
				title="태어난날짜"
				targetColumn="birthday"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<AddressConditionCopy
				title="사는 지역"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<StringConditionCopy
				title="회사"
				targetColumn="company"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<StringConditionCopy
				title="직무"
				targetColumn="job"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<StringConditionCopy
				title="출신 학교"
				targetColumn="university"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<SelectConditionCopy
				title="MBTI"
				type={Mbti}
				targetColumn="mbti"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<SelectConditionCopy
				title="흡연여부"
				type={SmokingYn}
				targetColumn="smoking_yn"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<SelectConditionCopy
				title="종교"
				type={Religion}
				targetColumn="religion"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<FilteringConditionCopy
				title="절대 안되는 부분"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<StringConditionCopy
				title="어필 사항"
				targetColumn="charming_point"
				conditionData={conditionData}
				setConditionData={setConditionData}
			/>
			<div className="col">
				<button className="btn btn-outline-dark btn-lg">
					{lastColumn}
				</button>
			</div>
		</>
	);
}
