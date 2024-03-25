import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../pages/pages";
import "./index.css";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";

export function init() {
	ReactDOM.createRoot(document.getElementById("root")!).render(
		<React.StrictMode>
			<RouterProvider
				router={createBrowserRouter([
					{
						path: "/App",
						element: <App />,
					},
					{
						path: "/test",
						element: <div>test</div>,
					},
				])}
			/>
		</React.StrictMode>
	);
}
