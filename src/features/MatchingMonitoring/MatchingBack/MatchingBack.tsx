import { Match, Matching } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";

interface MatchProps {
    matchItems: Matching[];
}

export const MatchingBack: React.FC<MatchProps> = ({
    matchItems
}: MatchProps) => {
	const Back = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();

		if (matchItems.length < 1) {
			alert("선택된 값이 없습니다.");
			return;
		}

		const matchIds = (matchItems:Matching[]) => {
			return matchItems.map((item:Matching) => item["id"])
					.filter(id => id !== undefined && id !== null);
		}

		try {
			const result = await getResult(matchIds(matchItems));
			if (result === "SUCCESS") {
				alert(`요청을 완료하였습니다.`);
				window.location.reload();
			} else {
				throw new Error();
			}
		} catch (err) {
			alert("요청에 실패하였습니다. 관리자에게 문의부탁드립니다.");
			window.location.reload();
		}
	};

	const btnData = {
		btnName: "성사실패",
		btnFunction: Back,
	};
	return <Match data={btnData} className={style.btn} />;
};
