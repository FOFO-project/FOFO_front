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
			gender: Gender.남자,
			approvalStatus: ApprovalStatus.APPROVED,
			matchingStatus: MatchingStatus.MATCHING_PENDING,
		})
	);
	const [womanConditionData, setWomanConditionData] = useState(
		new ConditionListModel({
			gender: Gender.여자,
			approvalStatus: ApprovalStatus.APPROVED,
			matchingStatus: MatchingStatus.MATCHING_PENDING,
		})
	);
	const [mans, setMans] = useState([]);
	const [womans, setWomans] = useState([]);

	const [manSelectedItems, setManSelectedItems] = useState<number[]>([]);
	const [womanSelectedItems, setWomanSelectedItems] = useState<number[]>([]);

	useEffect(() => {
		ApiCaller.get(
			"/members",
			new ConditionListModel({
				approvalStatus: ApprovalStatus.APPROVED,
				matchingStatus: MatchingStatus.MATCHING_PENDING,
			})
		).then((e) => {
			for (var i = 0; e.data.content.gender == "MAN"; i++) {}

			setMans(
				e.data.content
					? e.data.content.map((e: any) => new Member(e))
					: []
			);
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
						<IndividualMatch members={[]} />
						<ManualMatch members={[]} />
					</div>
				</div>
			</div>
		</div>
	);
}
