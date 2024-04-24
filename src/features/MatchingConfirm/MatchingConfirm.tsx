import { Match, MatchRequestDto } from "../../shared/shared";
import { useNavigate } from "react-router-dom";
import { getResult } from "./api/getResult";
import style from "../features.module.scss";

interface MatchProps {
    matchData: MatchRequestDto[];
}

export const MatchingConfirm: React.FC<MatchProps> = ({
    matchData
}: MatchProps) => {
	const navigate = useNavigate();
	const Confirm = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();

		if (matchData.length < 1) {
			alert("선택된 값이 없습니다.");
			return;
		}

		try {
			const result = await getResult(matchData);
			if (result === "SUCCESS") {
				alert(`매칭확정 완료.`);
				navigate("/MatchingManage");
			} else {
				throw new Error();
			}
		} catch (err) {
			alert("매칭확정 실패.");
		}
	};

	const btnData = {
		btnName: "매칭확정",
		btnFunction: Confirm,
	};
	return <Match data={btnData} className={style.btn} />;
};
