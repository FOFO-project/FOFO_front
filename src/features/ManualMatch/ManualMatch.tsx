import { Match } from "../../shared/shared";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getResult } from "./api/getResult";

export const ManualMatch = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const result: any = getResult();
		if (result !== "error") {
			navigate("/match/result", {
				state: { responseData: result },
			});
		}
	}, [navigate]); // navigate를 의존성 배열에 추가

	const btnData = {
		btnName: "수동매칭",
		btnType: "manual",
	};
	return <Match data={btnData} />;
};
