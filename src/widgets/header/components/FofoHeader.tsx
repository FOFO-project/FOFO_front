import { ReactElement, useReducer, useState } from "react";
import style from "../header.module.scss";

interface HeaderProps {
	// 차후, logo는 실제 FOFO image, items는 각각의 features로 대체될 예정
	data: {
		logo: any;
		item1: String;
		item2: String;
		item3: String;
		item4: String;
		item5: String;
	};
}

export function FofoHeader({ data }: HeaderProps) {
	return (
		<>
			<header className={style.header}>
				<div className={style.header_wrapper}>
					<img
						className={style.header_logo}
						src={data.logo}
						alt="FOFO logo"
					/>
					<ul className={style.header_menubox}>
						<li className={style.header_items}>
							<a href="http://localhost:5173/SignupManage">
								{data.item1}
							</a>
						</li>
						<li className={style.header_items}>
							<a href="http://localhost:5173/HeaderTest">
								{data.item2}
							</a>
						</li>
						<li className={style.header_items}>
							<a href="http://localhost:5173/membercardtest">
								{data.item3}
							</a>
						</li>
						<li className={style.header_items}>
							<a href="http://localhost:5173/MemberManage">{data.item4}</a>
						</li>
						<li className={style.header_items}>
							<a href="http://localhost:5173/ButtonTest">{data.item5}</a>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}
