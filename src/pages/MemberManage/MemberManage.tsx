import { HeaderTest } from "../pages";
import { ConditionBoxCopy, ConditionListModel } from "../../shared/shared";
import { useState } from "react";
import { MemberListPanelCopy } from "../../widgets/listPanels/MemberListPanel/MemberListPanelCopy";

export function MemberManage() {
	const [conditionData, setConditionData] = useState(
		new ConditionListModel()
	);
	const [members, setMembers] = useState([]);
	return (
        <>
            <HeaderTest />
			<div className="container px-4 text-center">
				<div className="row gx-5">
					<div className="col">
                        <div className="p-3">
                            <ConditionBoxCopy
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                                lastColumn="카카오톡 ID"
                            />
                            <MemberListPanelCopy members={members} />
                        </div>
					</div>
                    <div className="col">
                        <div className="p-3">
                            <ConditionBoxCopy
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                                lastColumn="카카오톡 ID"
                            />
                            <MemberListPanelCopy members={members} />
                        </div>
					</div>
				</div>
			</div>
        </>
	);
}
