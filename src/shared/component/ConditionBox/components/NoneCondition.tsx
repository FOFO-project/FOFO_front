import style from "../ConditionBox.module.scss";

interface NoneCondtionProps {
	title: string;
}
export function NoneCondition({ title }: NoneCondtionProps) {
	return (
		<div className="dropdown">
			<button
				className={`btn btn-light btn-lg ${style.btnbox}`}
				data-bs-toggle="dropdown"
				aria-expanded="false"
				data-bs-auto-close="true"
			>
				{title}
			</button>
		</div>
	);
}
