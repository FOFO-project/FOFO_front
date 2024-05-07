import { FofoHeader } from "../../widgets/widgets";
import page_styles from "../pages.module.scss";
import styles from "./ApprovalManage.module.scss";
import { ApprovalStatus, ConditionListModel } from "../../shared/shared";
import { useState } from "react";
import { MemberManagePanel } from "../../widgets/widgets";
import { Approve } from "../../features/ApprovalManage/Approve/Approve";
export function ApprovalManage() {
	const [conditionData, setConditionData] = useState(
		new ConditionListModel({
			approvalStatus: ApprovalStatus.DEPOSIT_COMPLETED,
			matchableYn: "N",
		})
	);
	const [members, setMembers] = useState([]);
	const [selectedItems, setSelectedItems] = useState<number[]>([]);
	const pageType = "ApprovalManage";

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
							title={"전체"}
							pageType={pageType}
						/>
					</div>
					<div className={styles.buttonContainer}>
						<Approve selected={selectedItems} />
					</div>
				</div>
			</div>
		</div>
	);
}
