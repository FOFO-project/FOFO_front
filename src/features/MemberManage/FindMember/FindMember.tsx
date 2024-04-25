import classNames from "classnames";
import { ConditionListModel } from "../../../shared/shared";
import { getResult } from "./api/getResult";
import style from "../../features.module.scss";

interface FindProps {
	conditionData: ConditionListModel;
	setMembers: Function;
}

export const FindMember: React.FC<FindProps> = ({
	conditionData,
	setMembers,
}: FindProps) => {
	const search = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();
		try {
			const result = await getResult(
				ConditionListModel.toFindMembersConditionDto(conditionData)
			);
			setMembers(result);
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
