import { Match } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";
import { useState } from "react";

export const AutoMatch: React.FC = () => {
	const [isActive, setActivated] = useState(true);

	const Auto = async () => {
		try {
			setActivated(false);
			const result = await getResult();
			alert(`자동매칭 완료. (실패 : ${result.length}건)`);
			window.location.reload();
		} catch (err) {
			alert(err);
			window.location.reload();
		} finally {
			setActivated(true);
		}
	};

	const btnData = {
		btnName: "자동매칭",
		btnFunction: Auto,
	};

	return <Match data={btnData} className={style.btn} isActive={isActive} />;
};
