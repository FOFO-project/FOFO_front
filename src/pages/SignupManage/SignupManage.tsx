import { HeaderTest } from "../pages";
import page_styles from "../pages.module.scss";
import styles from "./SignupManage.module.scss";
import { ConditionBox, ConditionListModel } from "../../shared/shared";
import { Find, TestFind } from "../../features/features";
import { useState } from "react";
import { MemberListPanel } from "../../widgets/listPanels/MemberListPanel/MemberListPanel";
export function SignupManage() {
	const [conditionData, setConditionData] = useState(
		new ConditionListModel()
	);
	const [members, setMembers] = useState([]);
	return (
		<div className={page_styles.Page}>
			<div className={page_styles.Header}>
				<HeaderTest />
			</div>
			<div className={page_styles.Panel}>
				<div className={styles.container}>
					<div className={styles.contentsContainer}>
						<ConditionBox
							conditionData={conditionData}
							setConditionData={setConditionData}
						/>
						<MemberListPanel members={members} />
					</div>
					<div className={styles.buttonContainer}>
						<TestFind
							conditionData={conditionData}
							setMembers={setMembers}
						/>
						<Find conditionData={conditionData} />
						<button style={{ display: "block" }}>입금확인</button>
						<button style={{ display: "block" }}>거절</button>
					</div>
				</div>
			</div>
		</div>
	);
}
