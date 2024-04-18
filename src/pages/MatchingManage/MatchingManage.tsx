import { HeaderTest } from "../pages";
import { MatchingManagePanel } from "../../widgets/listPanels/MatchingPanel/MatchingManagePanel";
import { ConditionListModel, ApiCaller, Member } from "../../shared/shared";
import { useState, useEffect } from "react";
import style from "./MatchingManage.module.scss";
import { AutoMatch, IndividualMatch, ManualMatch, Find } from "../../features/features";

export function MatchingManage() {
	const [manConditionData, setManConditionData] = useState(
		new ConditionListModel()
	);
    const [womanConditionData, setWomanConditionData] = useState(
		new ConditionListModel()
	);

	const [mans, setMans] = useState([]);
	const [womans, setWomans] = useState([]);
	
	useEffect(() => {
		ApiCaller.get("/members")
			.then((e) =>{
			setMans(e.data.content?e.data.content.map((e:any) => new Member(e)):[]);
			})
	},[]);

	return (
		<>
		<HeaderTest />
		<div className={`container-fulid ${style.contentwrap}`}>
			<div className={`row ${style.positioning}`}>
				<div className={`col-5`}>
					<div className={`${style.contents}`}>
						<MatchingManagePanel
							memberListProps={{members:mans}}
							conditionProps={{conditionData:manConditionData,setConditionData:setManConditionData}}
							title={"남자"}
						/>
					</div>
				</div>
				<div className={`col-5`}>
					<div className={style.findButtonWrap}>
						<Find param={{manConditionData}}/>
					</div>
					<div className={`${style.contents}`}>
						<MatchingManagePanel
							memberListProps={{members:womans}}
							conditionProps={{conditionData:womanConditionData,setConditionData:setWomanConditionData}}
							title={"여자"}
						/>
					</div>
				</div>
				<div className={`col-1 ${style.matchButtonWrap}`}>
					<div className={``}>
						<div className={`${style.matchButtonBox}`}>
							<AutoMatch />
						</div>
						<div className={`${style.matchButtonBox}`}>
							<IndividualMatch members={[]}/>
						</div>
						<div className={`${style.matchButtonBox}`}>
							<ManualMatch members={[]}/>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}
