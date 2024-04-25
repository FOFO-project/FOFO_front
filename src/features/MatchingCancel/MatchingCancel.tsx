import { Match, Matching } from "../../shared/shared";
import { useNavigate } from "react-router-dom";
import { getResult } from "./api/getResult";
import style from "../features.module.scss";

interface MatchProps {
    matchItems: Matching[];
}

export const MatchingCancel: React.FC<MatchProps> = ({
    matchItems
}: MatchProps) => {
	const navigate = useNavigate();
	const Cancel = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();

		if (matchItems.length < 1) {
			alert("선택된 값이 없습니다.");
			return;
		}

		const matchIds = (matchItems:Matching[]) => {
			return matchItems.map((item:Matching) => item["id"])
					.filter(id => id !== undefined && id !== null);
		}

		try {
			const result = await getResult(matchIds(matchItems));
			if (result === "SUCCESS") {
				alert(`매칭취소 완료.`);
				navigate("/MatchingManage");
			} else {
				throw new Error();
			}
		} catch (err) {
			alert("매칭취소 실패.");
			navigate("/MatchingManage");
		}
	};

	const btnData = {
		btnName: "매칭취소",
		btnFunction: Cancel,
	};
	return <Match data={btnData} className={style.btn} />;
};
