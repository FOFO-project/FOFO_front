import { Match } from "../../shared/shared";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getResult } from "./api/getResult";

export const AutoMatch = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const result: any = getResult();
		if (result !== "error") {
			navigate("/match/member", {
				state: { responseData: result },
			});
		}
	}, []);

	const btnData = {
		btnName: "자동매칭"
	};
	return <Match data={btnData} />;
};