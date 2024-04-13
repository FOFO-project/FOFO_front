import { ConditionListModel, Member } from "../../shared/shared";
import style from "../features.module.scss";
import { useState } from "react";
import { getResult } from "./api/getResult";

interface FindProps {
	conditionData: ConditionListModel;
}

export const Find: React.FC<FindProps> = (param) => {
	const [member, setMember] = useState<Member[]>([]);

	const search = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();
		try {
			const result = await getResult(param);
			if (result == "error") {
				alert("조회에 실패하였습니다. 관리자에게 문의 부탁드립니다.");
				return;
			} else {
				setMember(result);
			}
		} catch (err) {
			alert("Error : " + err);
		}
	};

	const btnData = {
		btnName: "조회",
	};
	return (
		<>
			<a
				className="btn btn-success"
				href="#"
				onClick={search}
			>
				{btnData.btnName}
			</a>
		</>
	);
};
