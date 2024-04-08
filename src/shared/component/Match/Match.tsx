import style from "./Match.module.scss";

interface MatchProps {
	data: {
		btnName: String;
	};
}
export function Match({ data }: MatchProps) {
	return (
		// link는 차후 매칭완료 페이지 url로 설정
		<div className={style.container}>
			<a className={`${style.btn} ${style.blue}`} href="http://fofo/match/result">
				{data.btnName}
			</a>
		</div>
	);
}
