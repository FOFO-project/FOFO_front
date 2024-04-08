import { BlueButton } from "../../shared/shared";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getResult } from "./api/getResult";

export const IndividualMatch = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const result: any = getResult();
		if (result !== "error") {
			navigate("/match/result", {
				state: { responseData: result },
			});
		}
	}, []);

	const btnData = {
		btnName: "개별매칭"
	};
	return <BlueButton data={btnData} />;
};