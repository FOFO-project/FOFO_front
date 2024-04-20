import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import style from "../features.module.scss";

interface ApproveProps {
	selected: number[];
}

export function Approve({ selected }: ApproveProps) {
	const navigate = useNavigate();
	async function approveSelected() {
		try {
			//const result = await getResult(conditionData);
			//setMembers(result);
			console.log(selected);
			navigate("/MemberManage");
		} catch (err) {
			alert("확정에 실패하였습니다. 관리자에게 문의 부탁드립니다.");
		}
	}
	return (
		<button
			className={classNames("btn", "btn-primary", style.btn)}
			onClick={approveSelected}
		>
			확정
		</button>
	);
}
