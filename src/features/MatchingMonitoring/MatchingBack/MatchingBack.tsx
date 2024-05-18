import { Match, Matching } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface MatchProps {
	matchItems: Matching[];
}

export const MatchingBack: React.FC<MatchProps> = ({
	matchItems,
}: MatchProps) => {
	const navigate = useNavigate();
	const [isActive, setActivated] = useState(true);
	const Back = async () => {
		if (matchItems.length < 1) {
			alert("선택된 값이 없습니다.");
			return;
		}

		const matchIds = (matchItems: Matching[]) => {
			return matchItems
				.map((item: Matching) => item["id"])
				.filter((id) => id !== undefined && id !== null);
		};

		try {
			setActivated(false);
			const result = await getResult(matchIds(matchItems));
			if (result === "SUCCESS") {
				alert(`요청을 완료하였습니다.(찬스가 없는 인원의 경우, "가입신청" 메뉴에서 확인가능합니다.)`);
				navigate("/MemberManage");
			} else {
				throw new Error();
			}
		} catch (err) {
			alert("요청에 실패하였습니다. 관리자에게 문의부탁드립니다.");
			window.location.reload();
		} finally {
			setActivated(true);
		}
	};

	const btnData = {
		btnName: "성사실패",
		btnFunction: Back,
	};
	return <Match data={btnData} className={style.btn} isActive={isActive} />;
};
