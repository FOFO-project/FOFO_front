import { useNavigate } from "react-router-dom";
import {
	ApprovalStatus,
	ConditionListModel,
	Gender,
	Member,
	religionMap,
	smokingYnMap,
} from "../../../../shared/shared";
import config from "../../../../app/config";

interface MemberProps {
	members: Member[];
	setMembers: Function;
}

interface SelectedProps {
	selectedItems: number[];
	setSelectedItems: Function;
}

interface TableContentsProps {
	setImageId: Function;
	conditionData: ConditionListModel;
	memberProps: MemberProps;
	selectedProps: SelectedProps;
	pageType: string;
}

export function TableContents({
	conditionData,
	setImageId,
	memberProps,
	selectedProps,
	pageType,
}: TableContentsProps) {
	const { members, setMembers } = memberProps;
	const { selectedItems, setSelectedItems } = selectedProps;
	const navigate = useNavigate();

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
	// checkbox handler
	const checkboxHandler = (memberId: any) => {
		setSelectedItems((preSelectedItems: number[]) => {
			const isSelectedItems = preSelectedItems.includes(memberId);
			return isSelectedItems
				? preSelectedItems.filter((id) => id !== memberId)
				: [...preSelectedItems, memberId];
		});
	};

	return (
		<>
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
								onChange={() => checkboxHandler(member.id)}
								checked={selectedItems.includes(
									member.id as any
								)}
							/>
						</td>
						<td
							onClick={() => {
								navigate("/MemberEdit/" + member.id, {
									state: {
										location: pageType,
									},
								});
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
						<td>{Member.getBirthdayString(member.birthday)}</td>
						<td>{Member.getAddressString(member.address)}</td>
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
									handleNoteChange(e, member.id as number)
								}
								readOnly={true}
							/>
						</td>
						{conditionData.approvalStatus !==
							ApprovalStatus.DEPOSIT_PENDING && (
							<td>
								{member.profileImageId ? (
									<a
										type="button"
										data-bs-toggle="modal"
										data-bs-target="#staticBackdrop"
										onClick={() => {
											setImageId(
												member.profileImageId
													? member.profileImageId
													: ""
											);
										}}
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
												"/MemberEdit/" + member.id,
												{
													state: {
														location: pageType,
													},
												}
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
		</>
	);
}
