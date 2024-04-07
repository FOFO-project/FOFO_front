import { Member } from "../../shared/shared";
import { Match } from "../../shared/component/Match/Match";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AutoMatch = () => {
	const navigate = useNavigate();

	const fetchData = async () => {
		try {
			const response = await axios.post("https://fofo/match/auto");

			navigate("/match/result", {
				state: { responseData: response.data },
			});
		} catch (error) {
			console.error("err:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [navigate]);

	const btnData = {
		btnName: "자동매칭",
		btnType: "manual",
	};
	return <Match data={btnData} />;
};

export const IndividualMatch = () => {
	const navigate = useNavigate();

	const fetchData = async (members?: Member[]) => {
		try {
			const response = await axios.post(
				"https://fofo/match/auto",
				members
			);
			navigate("/match/result", {
				state: { responseData: response.data },
			});
		} catch (error) {
			console.error("err:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const btnData = {
		btnName: "개별매칭",
		btnType: "auto",
	};
	return <Match data={btnData} />;
};
