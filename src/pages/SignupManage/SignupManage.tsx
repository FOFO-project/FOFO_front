import { CommonHeader } from "../../widgets/widgets";
import page_styles from "../pages.module.scss";
import styles from "./SignupManage.module.scss";
import { ApprovalStatus, ConditionListModel } from "../../shared/shared";
import { ConfirmDeposit } from "../../features/features";
import { useState } from "react";
import { MemberManagePanel } from "../../widgets/widgets";
export function SignupManage() {
	const [conditionData, setConditionData] = useState(
		new ConditionListModel({
			approvalStatus: ApprovalStatus.DEPOSIT_PENDING,
			matchableYn: "N",
		})
	);
	const [members, setMembers] = useState([]);
	const [selectedItems, setSelectedItems] = useState<number[]>([]);
	const pageType = "SignupManage";

	return (
		<div className={page_styles.Page}>
			<CommonHeader className={page_styles.Header} />
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
							title={"전체"}
							pageType={pageType}
						/>
					</div>
					<div className={styles.buttonContainer}>
						<ConfirmDeposit selected={selectedItems} />
					</div>
				</div>
			</div>
		</div>
	);
}
