interface NoneCondtionProps {
	title: string;
}
export function NoneCondition({ title }: NoneCondtionProps) {
	return (
		<div
			style={{ width: "100%", display: "flex", justifyContent: "center" }}
		>
			<button
				className={`btn btn-light btn-lg`}
				data-bs-toggle="dropdown"
				aria-expanded="false"
				data-bs-auto-close="true"
				style={{minWidth: 180, width: "100%", height: 60 }}
			>
				{title}
			</button>
		</div>
	);
}
