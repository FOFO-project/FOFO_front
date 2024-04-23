import { FofoHeader } from "../../widgets/widgets";
import { MemberManagePanel } from "../../widgets/widgets";
import {
	ConditionListModel,
	ApiCaller,
	Member,
	Gender,
	ApprovalStatus,
	MatchingStatus,
} from "../../shared/shared";
import { useState, useEffect } from "react";
import style from "./MemberManage.module.scss";
import page_styles from "../pages.module.scss";
import {
	AutoMatch,
	IndividualMatch,
	ManualMatch,
} from "../../features/features";

export function MemberManage() {
	const [manConditionData, setManConditionData] = useState(
		new ConditionListModel({
			gender: Gender.MAN,
			approvalStatus: ApprovalStatus.APPROVED,
			matchingStatus: MatchingStatus.MATCHING_PENDING,
		})
	);
	const [womanConditionData, setWomanConditionData] = useState(
		new ConditionListModel({
			gender: Gender.WOMAN,
			approvalStatus: ApprovalStatus.APPROVED,
			matchingStatus: MatchingStatus.MATCHING_PENDING,
		})
	);
	const [mans, setMans] = useState<Member[]>([]);
	const [womans, setWomans] = useState<Member[]>([]);

	const [manSelectedItems, setManSelectedItems] = useState<number[]>([]);
	const [womanSelectedItems, setWomanSelectedItems] = useState<number[]>([]);

	useEffect(() => {
		ApiCaller.get(
			"/members",
			ConditionListModel.toFindMembersConditionDto(
				new ConditionListModel({
					approvalStatus: ApprovalStatus.APPROVED,
					matchingStatus: MatchingStatus.MATCHING_PENDING,
				})
			)
		).then((e) => {
			let manList:Member[] = [];
			let womanList:Member[] = [];
			for (var i = 0; i < e.data.content.length; i++) {
				let member = new Member(e.data.content[i]);
				if(member.gender == Gender.MAN){
					manList.push(member);
				} else{
					womanList.push(member);
				}
			}
			setMans(manList);
			setWomans(womanList);
		});
	}, []);

	return (
		<div className={page_styles.Page}>
			<FofoHeader className={page_styles.Header} />
			<div className={page_styles.Panel}>
				<div className={style.container}>
					<div className={style.contentsContainer}>
						<div className={style.contents}>
							<MemberManagePanel
								memberListProps={{
									members: mans,
									setMembers: setMans,
								}}
								conditionProps={{
									conditionData: manConditionData,
									setConditionData: setManConditionData,
								}}
								selectedProps={{
									selectedItems: manSelectedItems,
									setSelectedItems: setManSelectedItems,
								}}
								title={"남자"}
							/>
						</div>
						<div className={style.contents}>
							<MemberManagePanel
								memberListProps={{
									members: womans,
									setMembers: setWomans,
								}}
								conditionProps={{
									conditionData: womanConditionData,
									setConditionData: setWomanConditionData,
								}}
								selectedProps={{
									selectedItems: womanSelectedItems,
									setSelectedItems: setWomanSelectedItems,
								}}
								title={"여자"}
							/>
						</div>
					</div>
					<div className={style.buttonContainer}>
						<AutoMatch />
						<IndividualMatch
							memberIds={[
								...manSelectedItems,
								...womanSelectedItems,
							]}
						/>
						<ManualMatch
							manIds={manSelectedItems}
							womanIds={womanSelectedItems}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
