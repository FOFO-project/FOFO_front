import classNames from "classnames";
import { PageInfo } from "../../shared";
import style from "./Pagnation.module.scss";

interface PagnationProps {
	pageInfo: PageInfo;
	setPageInfo: Function;
}

export function Pagnation({ pageInfo, setPageInfo }: PagnationProps) {
	const handleNextClick = () => {
		setPageInfo({ ...pageInfo, page: pageInfo.page + 1 });
	};
	const handlePrevClick = () => {
		setPageInfo({ ...pageInfo, page: pageInfo.page - 1 });
	};
	return (
		<div className={style.container}>
			<button
				className={classNames(style.pageLink, "btn")}
				onClick={handlePrevClick}
				disabled={pageInfo.page <= 0}
			>
				Prev
			</button>
			<button
				className={classNames(style.pageInfo, "btn")}
				disabled={true}
			>{`${pageInfo.page + 1} of ${pageInfo.totalPages}`}</button>
			<button
				className={classNames(style.pageLink, "btn")}
				onClick={handleNextClick}
				disabled={pageInfo.page >= pageInfo.totalPages - 1}
			>
				Next
			</button>
		</div>
	);
}
