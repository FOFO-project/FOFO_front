import classNames from "classnames";

interface MatchProps {
	data: {
		btnName: string;
		btnFunction: Function;
	};
	className?: string;
}
export function Match({ data, className }: MatchProps) {
	return (
		// link는 차후 매칭완료 페이지 url로 설정
		<a
			className={classNames("btn", "btn-primary", className)}
			href="#"
			onClick={(e) => {
				data.btnFunction(e);
			}}
		>
			{data.btnName}
		</a>
	);
}
