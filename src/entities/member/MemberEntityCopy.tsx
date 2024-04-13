import { Member } from "../../shared/shared";
import styles from "./ui/member.module.scss";

interface MemberProps {
	data: Member;
}

export function MemberInformationCopy({ data }: MemberProps) {
	return (
		<div className={styles.container}>
			<ul className={styles.memberline}>
				{Object.values(data).map((e, i) => {
					return (
						<li className={styles.memberinfo} key={i}>
							{e.toString()}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
