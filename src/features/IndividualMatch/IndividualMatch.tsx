import { Match } from "../../shared/shared";
import { useNavigate } from "react-router-dom";
import { getResult } from "./api/getResult";
import style from "../features.module.scss";

interface MatchProps {
	memberIds: number[];
}

export const IndividualMatch: React.FC<MatchProps> = ({
	memberIds,
}: MatchProps) => {
	const navigate = useNavigate();

	const Individual = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();

		if (memberIds.length === 0) {
			alert("선택된 값이 없습니다");
			return;
		}

		try {
			const result = await getResult(memberIds);
			alert(`개별매칭 완료. (실패 : ${result.length}건)`);
			navigate("/MatchingManage");
		} catch (err) {
			alert(err);
		}
	};

	const btnData = {
		btnName: "개별매칭",
		btnFunction: Individual,
	};

	return <Match data={btnData} className={style.btn} />;
};
