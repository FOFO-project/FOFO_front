import classNames from "classnames";

interface MatchProps {
	data: {
		btnName: string;
		btnFunction: Function;
	};
	isActive?: boolean;
	className?: string;
}
export function Match({ data, isActive, className }: MatchProps) {
	return (
		// link는 차후 매칭완료 페이지 url로 설정
		<button
			className={classNames("btn", "btn-primary", className)}
			onClick={() => {
				data.btnFunction();
			}}
			disabled={!isActive}
		>
			{data.btnName}
		</button>
	);
}
