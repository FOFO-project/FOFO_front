import classNames from "classnames";
import style from "../../features.module.scss";
import { getResult } from "./api/getResult";

interface DeleteMemberProps {
	selected: number[];
}

export function DeleteMember({ selected }: DeleteMemberProps) {
	async function DeleteMemberSelected() {
		if (selected.length < 1) {
			alert("선택된 값이 없습니다.");
			return;
		}

		try {
			const result = await getResult(selected);
			alert(`등록거절 완료. (실패 : ${result.length}건)`);
			window.location.reload();
		} catch (err) {
			alert("거절에 실패하였습니다. 관리자에게 문의 부탁드립니다.");
			window.location.reload();
		}
	}
	return (
		<button
			className={classNames("btn", "btn-primary", style.btn)}
			onClick={DeleteMemberSelected}
		>
			회원삭제
		</button>
	);
}
