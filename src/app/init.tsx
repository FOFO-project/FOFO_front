import React from "react";
import ReactDOM from "react-dom/client";
import { App, SignupManage, MemberCardTest, HeaderTest, ButtonTest } from "../pages/pages";
import "./index.css";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";

export function init() {
	ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
		<React.StrictMode>
			<RouterProvider
				router={createBrowserRouter([
					{
						path: "/",
						element: <Navigate to="/App" />,
					},
					{
						path: "/App",
						element: <App />,
					},
					{
						path: "/SignupManage",
						element: <SignupManage />,
					},
					{
						path: "/MemberCardTest",
						element: <MemberCardTest />,
					},
					{
						path: "/HeaderTest",
						element: <HeaderTest />,
					},
					{
						path: "/ButtonTest",
						element: <ButtonTest />,
					},
				])}
			/>
		</React.StrictMode>
	);
}
