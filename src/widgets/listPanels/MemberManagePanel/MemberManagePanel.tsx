import { useEffect, useState } from "react";
import {
	ApiCaller,
	Member,
	PageInfo,
	Pagnation,
	ImagePopup,
} from "../../../shared/shared";
import { ConditionListModel } from "../../../shared/shared";
import style from "./MemberManagePanel.module.scss";
import { FindMember, DeleteMember } from "../../../features/features";
import classNames from "classnames";
import { TableHeader } from "./components/TableHeader";
import { TableContents } from "./components/TableContents";
import config from "../../../app/config";
interface MemberListProps {
	members: Member[];
	setMembers: Function;
}
interface ConditionProps {
	conditionData: ConditionListModel;
	setConditionData: Function;
}
interface SelectedProps {
	selectedItems: number[];
	setSelectedItems: Function;
}

export function MemberManagePanel({
	memberListProps,
	conditionProps,
	selectedProps,
	title,
	pageType,
}: {
	memberListProps: MemberListProps;
	conditionProps: ConditionProps;
	selectedProps: SelectedProps;
	title: string;
	pageType: string;
}) {
	const { setMembers } = memberListProps;
	const { conditionData } = conditionProps;
	const { selectedItems } = selectedProps;

	// image popup state
	const [imageId, setImageId] = useState("");

	// 페이지네이션
	const [pageInfo, setPageInfo] = useState(new PageInfo());

	// 초기 데이터 로드
	useEffect(() => {
		ApiCaller.get("/members", {
			pageNumber: pageInfo.page,
			pageSize: pageInfo.size,
			...ConditionListModel.toFindMembersConditionDto(conditionData),
		}).then((e) => {
			setPageInfo(new PageInfo(e.data.pageInfo));
			setMembers(
				e.data.content
					? e.data.content.map((e: any) => new Member(e))
					: []
			);
		});
	}, [pageInfo.page]);

	return (
		<div className={style.container}>
			<div className={style.button_container}>
				<Pagnation pageInfo={pageInfo} setPageInfo={setPageInfo} />
				<FindMember
					conditionData={conditionData}
					setMembers={setMembers}
					pageInfoProps={{ pageInfo, setPageInfo }}
				/>
				<DeleteMember selected={selectedItems} />
			</div>
			<div className={style.table_container}>
				<ImagePopup
					apiUrl={config.api_url}
					imageId={imageId}
					popupId={title}
				/>
				<table className={`table`}>
					<TableHeader
						title={title}
						conditionProps={conditionProps}
						memberProps={memberListProps}
						selectedProps={selectedProps}
					/>
					<TableContents
						conditionData={conditionData}
						setImageId={setImageId}
						memberProps={memberListProps}
						selectedProps={selectedProps}
						pageType={pageType}
						title={title}
					/>
				</table>
			</div>
		</div>
	);
}
