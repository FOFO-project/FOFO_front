import classNames from "classnames";
import { ConditionListModel, PageInfo } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";

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
	const { pageInfo, setPageInfo } = pageInfoProps;
	const search = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();
		try {
			const result = await getResult({
				pageNumber: pageInfo.page,
				pageSize: pageInfo.size,
				...ConditionListModel.toFindMembersConditionDto(conditionData),
			});
			setPageInfo(new PageInfo(result.pageInfo));
			setMembers(result.members);
		} catch (err) {
			alert("조회에 실패하였습니다. 관리자에게 문의 부탁드립니다.");
		}
	};

	const btnData = {
		btnName: "조회",
	};
	return (
		<>
			<a
				className={classNames("btn", "btn-primary", style.btn)}
				href="#"
				onClick={search}
			>
				{btnData.btnName}
			</a>
		</>
	);
};
