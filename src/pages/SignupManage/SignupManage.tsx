import { FofoHeader } from "../../widgets/widgets";
import page_styles from "../pages.module.scss";
import styles from "./SignupManage.module.scss";
import {
	ApiCaller,
	ApprovalStatus,
	ConditionListModel,
	Member,
} from "../../shared/shared";
import { Reject, ConfirmDeposit } from "../../features/features";
import { useEffect, useState } from "react";
import { MemberManagePanel } from "../../widgets/widgets";
export function SignupManage() {
	const [conditionData, setConditionData] = useState(
		new ConditionListModel({
			approvalStatus: ApprovalStatus.DEPOSIT_PENDING,
			matchableYn: "Y",
		})
	);
	const [members, setMembers] = useState([]);
	const [selectedItems, setSelectedItems] = useState<number[]>([]);

	useEffect(() => {
		ApiCaller.get(
			"/members",
			ConditionListModel.toFindMembersConditionDto(conditionData)
		).then((e) => {
			setMembers(
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
				<div className={styles.container}>
					<div className={styles.contentsContainer}>
						<MemberManagePanel
							memberListProps={{
								members: members,
								setMembers: setMembers,
							}}
							conditionProps={{
								conditionData: conditionData,
								setConditionData: setConditionData,
							}}
							selectedProps={{
								selectedItems: selectedItems,
								setSelectedItems: setSelectedItems,
							}}
							title={" "}
						/>
					</div>
					<div className={styles.buttonContainer}>
						<ConfirmDeposit selected={selectedItems} />
						<Reject selected={selectedItems} />
					</div>
				</div>
			</div>
		</div>
	);
}
