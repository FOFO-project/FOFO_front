import { Match, Matching, MatchingStatus } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";

interface MatchProps {
    matchData: Matching[];
}

export const MatchingConfirm: React.FC<MatchProps> = ({
    matchData
}: MatchProps) => {
	const Confirm = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();

		if (matchData.length < 1) {
			alert("선택된 값이 없습니다.");
			return;
		}
		
		for(let i = 0; i < matchData.length; i++){
			if(matchData[i].matchingStatus !== MatchingStatus.MATCHING_PROGRESSING){
				alert("매칭확정은 프로필발송 상태인 건들만 가능합니다.");
				return;
			}
		}

		for(let i = 0; i < matchData.length; i++){
			if(matchData[i].manAgreement == null || matchData[i].womanAgreement == null){
				alert("매칭상태가 확정되지 않은 커플이 있습니다.");
				return;
			}
		}

		try {
			const result = await getResult(matchData.map(e => e.MatchRequestDto()));
			if (result === "SUCCESS") {
				alert(`매칭확정 완료.`);
				window.location.reload();
			} else {
				throw new Error();
			}
		} catch (err) {
			alert("매칭확정 실패.");
			window.location.reload();
		}
	};

	const btnData = {
		btnName: "매칭확정",
		btnFunction: Confirm,
	};
	return <Match data={btnData} className={style.btn} />;
};
