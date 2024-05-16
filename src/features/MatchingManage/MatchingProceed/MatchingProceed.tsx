import { Match, Matching } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";
import { useState } from "react";

interface MatchProps {
	matchData: Matching[];
}

export const MatchingProceed: React.FC<MatchProps> = ({
	matchData,
}: MatchProps) => {
	const [isActive, setActivated] = useState(true);
	const Proceed = async () => {
		if (matchData.length < 1) {
			alert("선택된 값이 없습니다.");
			return;
		}

		try {
			setActivated(false);
			const result = await getResult(
				matchData.map((e) => e.MatchRequestDto())
			);
			if (result === "SUCCESS") {
				alert(`프로필발송 완료`);
				window.location.reload();
			} else {
				throw new Error();
			}
		} catch (err) {
			alert("프로필발송 실패");
			window.location.reload();
		} finally {
			setActivated(true);
		}
	};

	const btnData = {
		btnName: "프로필발송",
		btnFunction: Proceed,
	};
	return <Match data={btnData} className={style.btn} isActive={isActive} />;
};
