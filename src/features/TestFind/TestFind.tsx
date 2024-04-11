import { ConditionListModel, Member } from "../../shared/shared";
import style from "../features.module.scss";
import { useState } from "react";
import { getResult } from "./api/getResult";

interface TestFindProps {
	conditionData: ConditionListModel;
	setMembers: Function;
}

export const TestFind: React.FC<TestFindProps> = (param) => {
	const search = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();
		console.log(JSON.stringify(param.conditionData, null, 2));
		try {
			const result = await getResult(param);
			param.setMembers(result);
		} catch (err) {
			alert("Error : " + err);
		}
	};

	const btnData = {
		btnName: "테스트 조회",
	};
	return (
		<>
			<a
				className={`${style.btn} ${style.red}`}
				href="#"
				onClick={search}
			>
				{btnData.btnName}
			</a>
		</>
	);
};
