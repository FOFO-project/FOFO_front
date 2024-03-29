import React from "react";
import ReactDOM from "react-dom/client";
import { App, Test, MemberCardTest } from "../pages/pages";
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
						element: <Navigate to="/Test" />,
					},
					{
						path: "/App",
						element: <App />,
					},
					{
						path: "/Test",
						element: <Test />,
					},
					{
						path: "/MemberCardTest",
						element: <MemberCardTest />,
					},
				])}
			/>
		</React.StrictMode>
	);
}
