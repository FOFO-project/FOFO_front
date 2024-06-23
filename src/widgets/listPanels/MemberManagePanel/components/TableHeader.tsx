import classNames from "classnames";
import {
	AddressCondition,
	ApprovalStatus,
	ConditionListModel,
	DateCondition,
	FilteringCondition,
	Mbti,
	Member,
	NoneCondition,
	Religion,
	SelectCondition,
	SmokingYn,
	StringCondition,
} from "../../../../shared/shared";
import style from "../MemberManagePanel.module.scss";

interface ConditionProps {
	conditionData: ConditionListModel;
	setConditionData: Function;
}

interface MemberProps {
	members: Member[];
	setMembers: Function;
}

interface SelectedProps {
	selectedItems: number[];
	setSelectedItems: Function;
}

interface TableHeaderProps {
	title: string;
	conditionProps: ConditionProps;
	memberProps: MemberProps;
	selectedProps: SelectedProps;
}
export function TableHeader({
	title,
	conditionProps,
	memberProps,
	selectedProps,
}: TableHeaderProps) {
	const { conditionData, setConditionData } = conditionProps;
	const { members } = memberProps;
	const { selectedItems, setSelectedItems } = selectedProps;

	function isAllSelected() {
		for (const member of members) {
			if (!selectedItems.includes(member.id as number)) {
				return false;
			}
		}
		return true;
	}
	function handleSelectAll() {
		const selected = new Set(selectedItems);
		if (isAllSelected()) {
			members.forEach((member) => selected.delete(member.id as number));
		} else {
			members.forEach((member) => selected.add(member.id as number));
		}
		setSelectedItems(Array.from(selected));
	}

	return (
		<thead className={classNames(style.thead)}>
			<tr>
				<th className="col bg-black text-light align-middle">
					<button
						className={classNames(
							`btn btn-md ${
								isAllSelected() ? "btn-dark" : "btn-light"
							}`,
							style.headItem
						)}
						onClick={() => handleSelectAll()}
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
