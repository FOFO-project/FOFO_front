import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import style from "../features.module.scss";
import { getResult } from "./api/getResult";

interface RejectProps {
	selected: number[];
}

export function Reject({ selected }: RejectProps) {
	const navigate = useNavigate();
	async function rejectSelected() {
		if (selected.length < 1) {
			alert("선택된 값이 없습니다.");
			return;
		}

		try {
			const result = await getResult(selected);
			alert(`등록거절 완료. (실패 : ${result.length}건)`);
			navigate("/SignupManage");
		} catch (err) {
			alert("거절에 실패하였습니다. 관리자에게 문의 부탁드립니다.");
			navigate("/SignupManage");
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
