import { Match } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";

export const AutoMatch: React.FC = () => {

	const Auto = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		try {
			const result = await getResult();
			alert(`자동매칭 완료. (실패 : ${result.length}건)`);
			window.location.reload();
		} catch (err) {
			alert(err);
			window.location.reload();
		}
	};

	const btnData = {
		btnName: "자동매칭",
		btnFunction: Auto,
	};

	return <Match data={btnData} className={style.btn} />;
};
