import { useParams } from "react-router-dom";

export function Form() {
	const { memberId } = useParams();
	return (
		<div>
			<form>
				<div>memberId</div>
			</form>
		</div>
	);
}
