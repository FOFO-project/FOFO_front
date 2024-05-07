import { PageInfo } from "../shared";

interface PagnationProps {
	pageInfo: PageInfo;
	setPageInfo: Function;
}

export function Pagnation({ pageInfo, setPageInfo }: PagnationProps) {
	const handlePageClick = (page: number) => {
		setPageInfo({ ...pageInfo, page: page });
	};
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
						pageInfo.page === 0 ? "page-item disabled" : "page-item"
					}
				>
					<button className="page-link" onClick={handlePrevClick}>
						Previous
					</button>
				</li>
				{Array.from({ length: pageInfo.totalPages }, (_, i) => {
					return (
						<li
							className={
								pageInfo.page === i
									? "page-item active"
									: "page-item"
							}
							key={i}
						>
							<button
								className="page-link"
								onClick={() => {
									handlePageClick(i);
								}}
							>
								{i + 1}
							</button>
						</li>
					);
				})}
				<li
					className={
						pageInfo.page === pageInfo.totalPages
							? "page-item disabled"
							: "page-item"
					}
				>
					<button className="page-link" onClick={handleNextClick}>
						Next
					</button>
				</li>
			</ul>
		</div>
	);
}
