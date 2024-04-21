import { Match } from "../../shared/shared";
import { useNavigate } from "react-router-dom";
import { getResult } from "./api/getResult";
import style from "../features.module.scss";

export const AutoMatch: React.FC = () => {
	const navigate = useNavigate();

	const Auto = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		try {
			const result = await getResult();
			alert(`자동매칭 완료. (실패 : ${result.length}건)`);
			navigate("/MatchManage");
		} catch (err) {
			alert("매칭에 실패하였습니다. 관리자에게 문의 부탁드립니다.");
		}
	};

	const btnData = {
		btnName: "자동매칭",
		btnFunction: Auto,
	};

	return <Match data={btnData} className={style.btn} />;
};
