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
			navigate("/MemberManage");
		} catch (err) {
			alert(err);
			navigate("/MemberManage");
		}
	};

	const btnData = {
		btnName: "자동매칭",
		btnFunction: Auto,
	};

	return <Match data={btnData} className={style.btn} />;
};
