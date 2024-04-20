import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import style from "../features.module.scss";

interface RejectProps {
	selected: number[];
}

export function Reject({ selected }: RejectProps) {
	const navigate = useNavigate();
	async function rejectSelected() {
		try {
			//const result = await getResult(conditionData);
			//setMembers(result);
			console.log(selected);
			navigate("/ApprovalManage");
		} catch (err) {
			alert("거절에 실패하였습니다. 관리자에게 문의 부탁드립니다.");
		}
	}
	return (
		<button
			className={classNames("btn", "btn-primary", style.btn)}
			onClick={rejectSelected}
		>
			거절
		</button>
	);
}
