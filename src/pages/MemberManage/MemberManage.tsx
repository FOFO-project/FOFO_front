import { HeaderTest } from "../pages";
import { MemberManagePanel } from "../../widgets/listPanels/MemberManagePanel/MemberManagePanel";
import { ConditionListModel } from "../../shared/shared";
import { useState } from "react";
import style from "../pages.module.scss";
import { AutoMatch, IndividualMatch, ManualMatch, Find } from "../../features/features";

export function MemberManage() {
	const [manConditionData, setManConditionData] = useState(
		new ConditionListModel()
	);
    const [womanConditionData, setWomanConditionData] = useState(
		new ConditionListModel()
	);
	const [mans, setMas] = useState([]);
	const [womans, setWomans] = useState([]);

	return (
		<>
		<HeaderTest />
		<div className={`container-fulid ${style.contentwrap}`}>
			<div className={`row`}>
				<div className={`col-5`}>
					<div className={`${style.contents}`}>
						<MemberManagePanel
							memberListProps={{members:mans}}
							conditionProps={{conditionData:manConditionData,setConditionData:setManConditionData}}
						/>
					</div>
				</div>
				<div className="col-5">
					<div className={`${style.contents}`}>
						<MemberManagePanel
							memberListProps={{members:womans}}
							conditionProps={{conditionData:womanConditionData,setConditionData:setWomanConditionData}}
						/>
					</div>
				</div>
				<div className="col-1">
					<div className="p-3">
						<div className={`align-self-start ${style.buttonWrap}`}>
							<div className={`${style.buttonBox}`}>
								<AutoMatch />
							</div>
							<div className={`${style.buttonBox}`}>
								<IndividualMatch members={[]}/>
							</div>
							<div className={`${style.buttonBox}`}>
								<ManualMatch members={[]}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}
