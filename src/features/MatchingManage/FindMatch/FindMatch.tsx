import classNames from "classnames";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";
import { PageInfo } from "../../../shared/shared";
import { useState } from "react";

interface PageInfoProps {
	pageInfo: PageInfo;
	setPageInfo: Function;
}
interface FindProps {
	conditionData: any;
	pageInfoProps: PageInfoProps;
	setMatchings: Function;
}

export const FindMatch: React.FC<FindProps> = ({
	conditionData,
	pageInfoProps,
	setMatchings,
}: FindProps) => {
	const [isActive, setActivated] = useState(true);

	const search = async () => {
		const { pageInfo, setPageInfo } = pageInfoProps;

		try {
			setActivated(false);
			let result;
			if (conditionData.matchingStatus === "MATCHING_NOTCOMPLETED") {
				result = await getResult({
					pageNumber: pageInfo.page,
					pageSize: pageInfo.size,
				});
			} else {
				result = await getResult({
					pageNumber: pageInfo.page,
					pageSize: pageInfo.size,
					...conditionData,
				});
			}
			setPageInfo(result.pageInfo);
			setMatchings(result.matches);
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
