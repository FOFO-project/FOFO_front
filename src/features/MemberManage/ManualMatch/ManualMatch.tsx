import { Match } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";
import { useState } from "react";

interface MatchProps {
	manIds: number[];
	womanIds: number[];
}

export const ManualMatch: React.FC<MatchProps> = ({
	manIds,
	womanIds,
}: MatchProps) => {
	const [isActive, setActivated] = useState(true);
	const Manual = async () => {
		if (manIds.length !== 1 || womanIds.length !== 1) {
			alert("수동매칭의 경우 남, 녀 각 1명씩 선택해야합니다.");
			return;
		}

		try {
			setActivated(false);
			const result = await getResult(manIds[0], womanIds[0]);
			if (result === "SUCCESS") {
				alert(`수동매칭 완료.`);
				window.location.reload();
			} else {
				throw new Error();
			}
		} catch (err) {
			alert(err);
			window.location.reload();
		} finally {
			setActivated(true);
		}
	};

	const btnData = {
		btnName: "수동매칭",
		btnFunction: Manual,
	};
	return <Match data={btnData} className={style.btn} isActive={isActive} />;
};
