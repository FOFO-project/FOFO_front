import { FofoHeader } from "../../widgets/widgets";
import { MatchingManagePanel } from "../../widgets/listPanels/MatchingPanel/MatchingManagePanel";
import { ConditionListModel, ApiCaller, Member } from "../../shared/shared";
import { useState, useEffect } from "react";
import style from "./MatchingManage.module.scss";
import {
	AutoMatch,
	IndividualMatch,
	ManualMatch,
	Find,
} from "../../features/features";

export function MatchingManage() {
	const [manConditionData, setManConditionData] = useState(
		new ConditionListModel()
	);
	const [womanConditionData, setWomanConditionData] = useState(
		new ConditionListModel()
	);

	const [mans, setMans] = useState([]);
	const [womans, _setWomans] = useState([]);

	useEffect(() => {
		ApiCaller.get("/members").then((e) => {
			setMans(
				e.data.content
					? e.data.content.map((e: any) => new Member(e))
					: []
			);
		});
	}, []);

	return (
		<>
			<FofoHeader className={style.Header} />
			<div className="row">
				<div className={`col-10 ${style.contentwrap}`}>
					<Find
						conditionData={manConditionData}
						setMembers={setMans}
					/>
					<div className={`${style.tablebox}`}>
						<MatchingManagePanel
							memberListProps={{ members: mans }}
							conditionProps={{
								conditionData: manConditionData,
								setConditionData: setManConditionData,
							}}
							title={"남자"}
						/>
						<MatchingManagePanel
							memberListProps={{ members: womans }}
							conditionProps={{
								conditionData: womanConditionData,
								setConditionData: setWomanConditionData,
							}}
							title={"여자"}
						/>
					</div>
				</div>
				<div className={`col-2 ${style.matchButtonWrap}`}>
					<div className={``}>
						<div className={`${style.matchButtonBox}`}>
							<AutoMatch />
						</div>
						<div className={`${style.matchButtonBox}`}>
							<IndividualMatch members={[]} />
						</div>
						<div className={`${style.matchButtonBox}`}>
							<ManualMatch members={[]} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
