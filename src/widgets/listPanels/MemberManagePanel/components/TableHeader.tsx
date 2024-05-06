import { useState } from "react";
import {
	AddressCondition,
	ApprovalStatus,
	ConditionListModel,
	DateCondition,
	FilteringCondition,
	Mbti,
	NoneCondition,
	Religion,
	SelectCondition,
	SmokingYn,
	StringCondition,
} from "../../../../shared/shared";

interface ConditionProps {
	conditionData: ConditionListModel;
	setConditionData: Function;
}
interface SelectedProps {
	selectedItems: number[];
	setSelectedItems: Function;
	selectAllHandler: Function;
}

interface TableHeaderProps {
	title: string;
	conditionProps: ConditionProps;
	selectedProps: SelectedProps;
}
export function TableHeader({
	title,
	conditionProps,
	selectedProps,
}: TableHeaderProps) {
	const { selectedItems, setSelectedItems, selectAllHandler } = selectedProps;

	const { conditionData, setConditionData } = conditionProps;
	return (
		<thead>
			<tr>
				<th
					className="col bg-black text-light align-middle"
					style={{ minWidth: 30 }}
				>
					<button
						className={`btn btn-md ${
							true ? "btn-dark" : "btn-light"
						}`}
						onClick={(e) => selectAllHandler(e)}
					>
						{title}
					</button>
				</th>
				<th className={`col bg-black`}>
					<StringCondition
						title="이름"
						targetColumn="name"
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				{conditionData.approvalStatus !==
					ApprovalStatus.DEPOSIT_PENDING && (
					<th className={`col bg-black`}>
						<NoneCondition title="패스/찬스" />
					</th>
				)}
				<th className={`col bg-black`}>
					<DateCondition
						title="태어난날짜"
						targetColumn="birthday"
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				<th className={`col bg-black`}>
					<AddressCondition
						title="사는지역"
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				<th className={`col bg-black`}>
					<StringCondition
						title="회사"
						targetColumn="company"
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				<th className={`col bg-black`}>
					<StringCondition
						title="직무"
						targetColumn="job"
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				<th className={`col bg-black`}>
					<StringCondition
						title="출신학교"
						targetColumn="university"
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				<th className={`col bg-black`}>
					<SelectCondition
						title="MBTI"
						targetColumn="mbti"
						type={Mbti}
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				<th className={`col bg-black`}>
					<SelectCondition
						title="흡연여부"
						targetColumn="smoking_yn"
						type={SmokingYn}
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				<th className={`col bg-black`}>
					<SelectCondition
						title="종교"
						targetColumn="religion"
						type={Religion}
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				<th className={`col bg-black`}>
					<FilteringCondition
						title="절대 안되는 부분"
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				<th className={`col bg-black`}>
					<StringCondition
						title="어필 사항"
						targetColumn="charming_point"
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				<th className={`col bg-black`}>
					<StringCondition
						title="카카오톡"
						targetColumn="kakao"
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				{conditionData.approvalStatus !==
					ApprovalStatus.DEPOSIT_PENDING && (
					<th className={`col bg-black`}>
						<DateCondition
							title="입금일"
							targetColumn="deposit_date"
							conditionData={conditionData}
							setConditionData={setConditionData}
						/>
					</th>
				)}
				<th className={`col bg-black`}>
					<StringCondition
						title="관리자멘트"
						targetColumn="rem"
						conditionData={conditionData}
						setConditionData={setConditionData}
					/>
				</th>
				{conditionData.approvalStatus !==
					ApprovalStatus.DEPOSIT_PENDING && (
					<th className={`col bg-black`}>
						<NoneCondition title="프로필카드" />
					</th>
				)}
			</tr>
		</thead>
	);
}
