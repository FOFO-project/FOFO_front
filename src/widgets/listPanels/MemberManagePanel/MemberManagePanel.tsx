import { useState } from "react";
import { Gender, Member } from "../../../shared/shared";
import {
	ConditionListModel,
	Mbti,
	Religion,
	SmokingYn,
	ApprovalStatus,
	smokingYnMap,
	religionMap,
} from "../../../shared/shared";
import {
	SelectCondition,
	StringCondition,
	AddressCondition,
	FilteringCondition,
	DateCondition,
	NoneCondition,
} from "../../../shared/shared";
import style from "./MemberManagePanel.module.scss";
import { FindMember } from "../../../features/features";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import config from "../../../app/config";

interface MemberListProps {
	members: Member[];
	setMembers: Function;
}
interface ConditionProps {
	conditionData: ConditionListModel;
	setConditionData: Function;
}
interface SelectedProps {
	selectedItems: number[];
	setSelectedItems: Function;
}

export function MemberManagePanel({
	memberListProps,
	conditionProps,
	selectedProps,
	title,
	pageType,
}: {
	memberListProps: MemberListProps;
	conditionProps: ConditionProps;
	selectedProps: SelectedProps;
	title: string;
	pageType: string;
}) {
	const navigate = useNavigate();
	const { members, setMembers } = memberListProps;
	const { conditionData, setConditionData } = conditionProps;
	const { selectedItems, setSelectedItems } = selectedProps;
	// 전체선택
	const [selectAll, setSelectAll] = useState(false);

	// checkbox handler
	const checkboxHandler = (memberId: any) => {
		setSelectedItems((preSelectedItems: number[]) => {
			const isSelectedItems = preSelectedItems.includes(memberId);
			return isSelectedItems
				? preSelectedItems.filter((id) => id !== memberId)
				: [...preSelectedItems, memberId];
		});
	};

	// 전체선택
	const selectAllHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const newSelectAll = !selectAll;
		setSelectAll(newSelectAll);
		setSelectedItems(
			newSelectAll ? members.map((member) => member.id as number) : []
		);
	};

	// 관리자멘트
	const handleNoteChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		memberId: number
	) => {
		e.preventDefault();
		const updatedNote = e.target.value;
		const updatedMembers = members.map((item) => {
			if (item.id === memberId) {
				return { ...item, note: updatedNote };
			} else {
				return { ...item };
			}
		});
		setMembers(updatedMembers);
	};

	return (
		<div className={style.container}>
			<div className={style.button_container}>
				<FindMember
					conditionData={conditionData}
					setMembers={setMembers}
				/>
			</div>
			<div className={style.table_container}>
				<table className={classNames(`table`)}>
					<thead>
						<tr>
							<th
								className="col bg-black text-light align-middle"
								style={{ minWidth: 30 }}
							>
								<button
									className={`btn btn-md ${
										selectAll ? "btn-dark" : "btn-light"
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
					<tbody className="text-center">
						{members?.map((member) => (
							<tr
								key={member.id}
								className={`align-middle ${
									member.gender === Gender.MAN
										? "table-primary"
										: "table-danger"
								}`}
								style={{ height: 100 }}
							>
								<td scope="row">
									<input
										type="checkbox"
										onChange={() =>
											checkboxHandler(member.id)
										}
										checked={selectedItems.includes(
											member.id as any
										)}
									/>
								</td>
								<td
									onClick={() => {
										navigate(
											"/MemberEdit/" + member.id,
											{ state : {
												location: pageType
											}}
										);
									}}
								>
									{member.name}
								</td>
								{conditionData.approvalStatus !==
									ApprovalStatus.DEPOSIT_PENDING && (
									<td>
										{Member.getCountAndChanceString(
											member.passCount,
											member.chance
										)}
									</td>
								)}
								<td>
									{Member.getBirthdayString(member.birthday)}
								</td>
								<td>
									{Member.getAddressString(member.address)}
								</td>
								<td>{member.company}</td>
								<td>{member.job}</td>
								<td>{member.university}</td>
								<td>{member.mbti}</td>
								<td>{smokingYnMap.get(member.smokingYn)}</td>
								<td>{religionMap.get(member.religion)}</td>
								<td>
									{Member.getFilteringString(
										member.filteringAgeRelation,
										member.filteringSmoker,
										member.filteringReligion
									)}
								</td>
								<td>{member.charmingPoint}</td>
								<td>{member.kakaoId}</td>
								{conditionData.approvalStatus !==
									ApprovalStatus.DEPOSIT_PENDING && (
									<td>
										{Member.getDepositDateString(
											member.depositDate
										)}
									</td>
								)}
								<td>
									<input
										className="form-control"
										type="text"
										name="관리자멘트"
										value={member.note || ""}
										onChange={(e) =>
											handleNoteChange(
												e,
												member.id as number
											)
										}
										readOnly={
											true
											// conditionData.approvalStatus !==
											// ApprovalStatus.DEPOSIT_COMPLETED
										}
									/>
								</td>
								{conditionData.approvalStatus !==
									ApprovalStatus.DEPOSIT_PENDING && (
									<td>
										{member.profileImageId ? (
											<a
												href={
													member.profileImageId
														? `${config.api_url}/images/${member.profileImageId}/download`
														: "#"
												}
												target="_blank"
											>
												<img
													src={`${config.api_url}/images/${member.profileImageId}`}
													style={{
														height: "80px",
													}}
												></img>
											</a>
										) : (
											<button
												onClick={() => {
													navigate(
														"/MemberEdit/" +
															member.id, 
														{ state : {
															location: pageType
														}}
													);
												}}
												className="btn btn-light"
											>
												프로필 카드 등록
											</button>
										)}
									</td>
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
