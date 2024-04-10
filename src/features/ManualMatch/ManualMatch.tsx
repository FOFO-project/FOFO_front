import { Match, Member } from "../../shared/shared";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getResult } from "./api/getResult";

interface MatchProps {
	members:Member[];
}

export const ManualMatch: React.FC<MatchProps> = (param) => {
	const navigate = useNavigate();
	const [member, setMember] = useState<any>(null);
	
	const Manual = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		const checkedMembers:Member[] = param.members;

		if(checkedMembers == undefined){
			alert("선택된 값이 없습니다.");
			return;
		}
		if(checkedMembers.length != 2){
			alert("수동매칭의 경우 남, 녀 각 1명씩 선택해야합니다.");
			return;
		}
		const firstItem = checkedMembers[0];
		const sencondItem = checkedMembers[1];
		if(firstItem.gender == sencondItem.gender){
			alert("수동매칭의 경우 같은성별은 선택할 수 없습니다.");
			return;
		}

		const result = await getResult(checkedMembers);
		if(result == "error") {
			alert("error");
		}else {
			setMember(result.data);
			navigate('/match/member', {state: {members : member}})
		}
	}

	const btnData = {
		btnName: "수동매칭",
		btnFunction: Manual
	};
	return <Match data={btnData} />;
};
