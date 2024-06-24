import style from "./header.module.scss";
import logo from "../../assets/fofologo-removebg-preview.png";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export function CommonHeader({ className }: { className?: string }) {
	const navigate = useNavigate();
	const data = [
		{
			title: "가입신청",
			url: "/SignupManage",
		},
		{
			title: "확정대기",
			url: "/ApprovalManage",
		},
		{
			title: "회원관리",
			url: "/MemberManage",
		},
		{
			title: "매칭관리",
			url: "/MatchingManage",
		},
		{
			title: "매칭현황",
			url: "/MatchingMonitoring",
		},
	];
	return (
		<header className={classNames(className, style.header)}>
			<div className={style.header_wrapper}>
				<img className={style.header_logo} src={logo} alt="FOFO logo" />
				<ul className={style.header_menubox}>
					{data.map((item, index) => {
						return (
							<li key={index} className={style.header_items}>
								<a
									href=""
									onClick={() => {
										navigate(item.url);
									}}
								>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</header>
	);
}
