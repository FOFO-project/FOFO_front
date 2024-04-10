import { Match } from "../../shared/shared";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getResult } from "./api/getResult";

export const AutoMatch: React.FC = () => {
	const navigate = useNavigate();
	const [member, setMember] = useState<any>(null);

	const Auto = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		const result = await getResult();
		if(result == "error") {
			alert("error");
		}else {
			setMember(result.data);
			navigate('/match/member', {state: {members : member}})
		}
	}

	const btnData = {
		btnName: "자동매칭",
		btnFunction: Auto
	};

	return <Match data={btnData} />;
};