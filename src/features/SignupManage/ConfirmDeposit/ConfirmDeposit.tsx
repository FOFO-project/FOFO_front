import classNames from "classnames";
import style from "../../features.module.scss";
import { getResult } from "./api/getResult";

interface ConfirmDepositProps {
	selected: number[];
}

export function ConfirmDeposit({ selected }: ConfirmDepositProps) {
	async function confirmSelected() {
		try {
			const result = await getResult(selected);
			alert(`입금확인 완료. (실패 : ${result.length}건)`);
			window.location.reload();
		} catch (err) {
			alert("입금확인에 실패하였습니다. 관리자에게 문의 부탁드립니다.");
			window.location.reload();
		}
	}
	return (
		<button
			className={classNames("btn", "btn-primary", style.btn)}
			onClick={confirmSelected}
		>
			입금확인
		</button>
	);
}
