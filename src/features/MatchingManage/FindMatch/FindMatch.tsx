import classNames from "classnames";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";

interface FindProps {
	conditionData: any;
	setMatchings: Function;
}

export const FindMatch: React.FC<FindProps> = ({
	conditionData,
	setMatchings,
}: FindProps) => {
	const search = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();
		try {
			let result;
			if(conditionData.matchingStatus === "MATCHING_NOTCOMPLETED"){
				result = await getResult({});
			} else {
				result = await getResult(conditionData);
			}
			setMatchings(result);
		} catch (err) {
			alert("조회에 실패하였습니다. 관리자에게 문의 부탁드립니다.");
		}
	};

	const btnData = {
		btnName: "조회",
	};
	return (
		<>
			<a
				className={classNames("btn", "btn-primary", style.btn)}
				href="#"
				onClick={search}
			>
				{btnData.btnName}
			</a>
		</>
	);
};
