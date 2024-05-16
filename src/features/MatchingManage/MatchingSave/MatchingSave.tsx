import { Match, Matching } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";

interface MatchProps {
    matchData: Matching[];
}

export const MatchingSave: React.FC<MatchProps> = ({
    matchData
}: MatchProps) => {
	const save = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();
		
		if (matchData.length < 1) {
			alert("선택된 값이 없습니다.");
			return;
		}

		try {
			const result = await getResult(matchData.map(e => e.MatchRequestDto()));
			if (result === "SUCCESS") {
				alert(`저장완료.`);
				window.location.reload();
			} else {
				throw new Error();
			}
		} catch (err) {
			alert("저장실패");
			window.location.reload();
		}
	};

	const btnData = {
		btnName: "상태저장",
		btnFunction: save,
	};
	return <Match data={btnData} className={style.btn} />;
};
