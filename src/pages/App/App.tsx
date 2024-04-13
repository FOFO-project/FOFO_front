import { Link } from "react-router-dom";
import { HeaderTest } from "../pages";
import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../pages.module.scss";

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="main fullsize">
				<HeaderTest />
				<Link to="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</Link>
				<Link to="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</Link>
				<Link to="http://localhost:5173/SignupManage" target="_blank">
					test
				</Link>
				<Link to="http://localhost:5173/membercardtest">
					MemberCard
				</Link>
				<Link to="http://localhost:5173/HeaderTest">header</Link>
				<Link to="http://localhost:5173/ButtonTest">Buttons</Link>
				<Link to="http://localhost:5173/MemberManage">MemberManage</Link>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}
