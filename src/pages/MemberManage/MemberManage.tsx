import { HeaderTest } from "../pages";
import { ConditionBoxCopy, ConditionListModel } from "../../shared/shared";
import { useState } from "react";

export function MemberManage() {
	const [conditionData, setConditionData] = useState(
		new ConditionListModel()
	);
	const [members, setMembers] = useState([]);
	return (
        <>
            <HeaderTest />
			<div className="container overflow-hidden text-center">
				<div className="row gx-5">
					<div className="col">
                        <div className="p-3">
                            <ConditionBoxCopy
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                                lastColumn="카카오톡 ID"
                            />
                        </div>
					</div>
                    <div className="col">
                        <div className="p-3">
                            <ConditionBoxCopy
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                                lastColumn="카카오톡 ID"
                            />
                        </div>
					</div>
				</div>
			</div>
        </>
	);
}
