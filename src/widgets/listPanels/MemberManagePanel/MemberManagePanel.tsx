import { useEffect, useState } from "react";
import {
	ApiCaller,
	Member,
	PageInfo,
	ImagePopup,
} from "../../../shared/shared";
import { ConditionListModel } from "../../../shared/shared";
import style from "./MemberManagePanel.module.scss";
import { FindMember } from "../../../features/features";
import classNames from "classnames";
import { TableHeader } from "./components/TableHeader";
import { TableContents } from "./components/TableContents";
import { Pagnation } from "./components/Pagnation";

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
	const { members, setMembers } = memberListProps;
	const { conditionData } = conditionProps;
	const { setSelectedItems } = selectedProps;

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
			<ImagePopup apiUrl={config.api_url} imageId={imageId} />
			<div className={style.button_container}>
				<FindMember
					conditionData={conditionData}
					setMembers={setMembers}
				/>
				<Pagnation pageInfo={pageInfo} setPageInfo={setPageInfo} />
			</div>
			<div className={style.table_container}>
				<table className={classNames(`table`)}>
					<TableHeader
						title={title}
						conditionProps={conditionProps}
						selectedProps={{
							...selectedProps,
							selectAllHandler: (e: any) => {
								setSelectedItems(
									members.map((member) => member.id as any)
								);
							},
						}}
					/>
					<TableContents
						members={members}
						conditionData={conditionData}
						setMembers={setMembers}
						selectedProps={selectedProps}
						pageType={pageType}
					/>
				</table>
			</div>
		</div>
	);
}
