import {
	ApiCaller,
	Matching,
	PageInfo,
	Pagnation,
} from "../../../shared/shared";
import { FindMatch } from "../../../features/features";
import style from "./MatchingManagePanel.module.scss";
import classNames from "classnames";
import { TableHeader } from "./components/TableHeader";
import { TableContents } from "./components/TableContents";
import { useEffect, useState } from "react";

interface MatchingProps {
	matchings: Matching[];
	setMatchings: Function;
}
interface SelectedProps {
	selectedItems: Matching[];
	setSelectedItems: Function;
}
interface MatchingManagePanelProps {
	matchingProps: MatchingProps;
	selectedProps: SelectedProps;
	title: string;
	pageType: string;
}
export function MatchingManagePanel({
	matchingProps,
	selectedProps,
	title,
	pageType,
}: MatchingManagePanelProps) {
	const { setMatchings } = matchingProps;

	// 매칭중(MATCHING_NOTCOMPLETED)
	const conditionData = {
		matchingStatus: pageType,
	};

	// 페이지네이션
	const [pageInfo, setPageInfo] = useState(new PageInfo());

	// page 진입 시 최초 조회 로직
	useEffect(() => {
		const body =
			conditionData.matchingStatus !== "MATCHING_NOTCOMPLETED"
				? {
						pageNumber: pageInfo.page,
						pageSize: pageInfo.size,
						...conditionData,
				}
				: { pageNumber: pageInfo.page, pageSize: pageInfo.size };
		ApiCaller.get("/match/result", body).then((e) => {
			const pageInfo = new PageInfo(e.data.pageInfo);
			const matchingList: Matching[] = e.data.content.map((e: any) => {
				return new Matching(e);
			});
			setPageInfo(pageInfo);
			setMatchings(matchingList);
		});
	}, [pageInfo.page]);

	return (
		<div className={style.container}>
			<div className={style.button_container}>
				<FindMatch
					conditionData={conditionData}
					setMatchings={setMatchings}
					pageInfoProps={{ pageInfo, setPageInfo }}
				/>
				<Pagnation pageInfo={pageInfo} setPageInfo={setPageInfo} />
			</div>
			<div className={style.table_container}>
				<table className={classNames(`table`)}>
					<TableHeader title={title} />
					<TableContents
						conditionData={conditionData}
						matchingProps={matchingProps}
						selectedProps={selectedProps}
					/>
				</table>
			</div>
		</div>
	);
}