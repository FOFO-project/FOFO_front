//import React from "react";
import ReactDOM from "react-dom/client";
import {
	SignupManage,
	MemberManage,
	MemberForm,
	MemberEdit,
	MatchingManage,
	ApprovalManage,
	MatchingMonitoring,
	WelcomeTo123,
} from "../pages/pages";
import "./index.css";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";

export function init() {
	ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
		//<React.StrictMode>
		<RouterProvider
			router={createBrowserRouter(
				[
					{
						path: "/",
						element: <Navigate to="/SignupManage" />,
					},
					{
						path: "/WelcomeTo123",
						element: <WelcomeTo123 />
					},
					{
						path: "/MemberForm",
						element: <MemberForm />,
					},
					{
						path: "/MemberEdit/:memberId",
						element: <MemberEdit />,
					},
					{
						path: "/SignupManage",
						element: <SignupManage />,
					},
					{
						path: "/ApprovalManage",
						element: <ApprovalManage />,
					},
					{
						path: "/MemberManage",
						element: <MemberManage />,
					},
					{
						path: "/MatchingManage",
						element: <MatchingManage />,
					},
					{
						path: "/MatchingMonitoring",
						element: <MatchingMonitoring />,
					},
				],
				{
					basename: "/page",
				}
			)}
		/>
		//</React.StrictMode>
	);
}
