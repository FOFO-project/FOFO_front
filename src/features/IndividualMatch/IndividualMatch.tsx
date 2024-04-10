import { Match, Member } from "../../shared/shared";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getResult } from "./api/getResult";

interface MatchProps {
	members:Member[];
}

export const IndividualMatch: React.FC<MatchProps> = (param) => {
	const navigate = useNavigate();
	const [member, setMember] = useState<any>(null);

	const Individual = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		const checkedMembers:Member[] = param.members;
		
		if(checkedMembers == undefined){
			alert("선택된 값이 없습니다");
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
		btnName: "자동매칭",
		btnFunction: Individual
	};

	return <Match data={btnData} />;
};