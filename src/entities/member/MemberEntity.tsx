import { Member } from "../../shared/shared";
import styles from "./ui/member.module.scss";

interface MemberProps {
	data: Member;
}

export function MemberInformation({ data }: MemberProps) {
	return (
		<div className={styles.container}>
			<ul className={styles.memberline}>
				{Object.values(data).map((e) => {
					return (
						<li className={styles.memberinfo}>{e.toString()}</li>
					);
				})}
			</ul>
		</div>
	);
}
