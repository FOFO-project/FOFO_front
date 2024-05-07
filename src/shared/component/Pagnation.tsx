import { PageInfo } from "../shared";

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
		<div
			style={{
				paddingTop: "10px",
			}}
		>
			<ul className="pagination">
				<li
					className={
						pageInfo.page <= 0 ? "page-item disabled" : "page-item"
					}
					key={"Prev"}
				>
					<button className="page-link" onClick={handlePrevClick}>
						Prev
					</button>
				</li>
				<li className="page-item">
					<span className="page-link">{`${pageInfo.page + 1} of ${
						pageInfo.totalPages
					}`}</span>
				</li>
				<li
					className={
						pageInfo.page >= pageInfo.totalPages - 1
							? "page-item disabled"
							: "page-item"
					}
					key={"Next"}
				>
					<button className="page-link" onClick={handleNextClick}>
						Next
					</button>
				</li>
			</ul>
		</div>
	);
}
