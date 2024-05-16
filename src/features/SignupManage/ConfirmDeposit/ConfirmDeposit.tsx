import classNames from "classnames";
import style from "../../features.module.scss";
import { getResult } from "./api/getResult";
import { useState } from "react";

interface ConfirmDepositProps {
	selected: number[];
}

export function ConfirmDeposit({ selected }: ConfirmDepositProps) {
	const [isActive, setActivated] = useState(true);
	async function confirmSelected() {
		try {
			setActivated(false);
			const result = await getResult(selected);
			alert(`입금확인 완료. (실패 : ${result.length}건)`);
			window.location.reload();
		} catch (err) {
			alert("입금확인에 실패하였습니다. 관리자에게 문의 부탁드립니다.");
			window.location.reload();
		} finally {
			setActivated(true);
		}
	}
	return (
		<button
			className={classNames("btn", "btn-primary", style.btn)}
			onClick={confirmSelected}
			disabled={!isActive}
		>
			입금확인
		</button>
	);
}
