import classNames from "classnames";
import { ConditionListModel, PageInfo } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";
import { useState } from "react";

interface PageInfoProps {
	pageInfo: PageInfo;
	setPageInfo: Function;
}

interface FindProps {
	conditionData: ConditionListModel;
	setMembers: Function;
	pageInfoProps: PageInfoProps;
}

export const FindMember: React.FC<FindProps> = ({
	conditionData,
	setMembers,
	pageInfoProps,
}: FindProps) => {
	const [isActive, setActivated] = useState(true);
	const { pageInfo, setPageInfo } = pageInfoProps;
	const search = async () => {
		try {
			setActivated(false);
			const result = await getResult({
				pageNumber: pageInfo.page,
				pageSize: pageInfo.size,
				...ConditionListModel.toFindMembersConditionDto(conditionData),
			});
			setPageInfo(new PageInfo(result.pageInfo));
			setMembers(result.members);
		} catch (err) {
			alert("조회에 실패하였습니다. 관리자에게 문의 부탁드립니다.");
		} finally {
			setActivated(true);
		}
	};

	const btnData = {
		btnName: "조회",
	};
	return (
		<>
			<button
				className={classNames("btn", "btn-primary", style.btn)}
				onClick={search}
				disabled={!isActive}
			>
				{btnData.btnName}
			</button>
		</>
	);
};
