import { Match } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";
import { useState } from "react";

interface MatchProps {
	memberIds: number[];
}

export const IndividualMatch: React.FC<MatchProps> = ({
	memberIds,
}: MatchProps) => {
	const [isActive, setActivated] = useState(true);

	const Individual = async () => {
		if (memberIds.length === 0) {
			alert("선택된 값이 없습니다");
			return;
		}

		try {
			setActivated(false);
			const result = await getResult(memberIds);
			alert(`개별매칭 완료. (실패 : ${result.length}건)`);
			window.location.reload();
		} catch (err) {
			alert(err);
			window.location.reload();
		} finally {
			setActivated(true);
		}
	};

	const btnData = {
		btnName: "개별매칭",
		btnFunction: Individual,
	};

	return <Match data={btnData} className={style.btn} isActive={isActive} />;
};
