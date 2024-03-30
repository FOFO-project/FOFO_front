import { Member, Address, Picture } from "./model/model-integrate";
import styles from "./ui/member.module.scss";

interface MemberProps {
	data: Member;
}

export function MemberInformation({ data }: MemberProps) {
	return (
		<div className={styles.container}>
			<ul className={styles.memberline}>
				<li className={styles.memberinfo}>{data.name}</li>
				<li className={styles.memberinfo}>{data.gender}</li>
				<li className={styles.memberinfo}>{data.age}</li>
				<li className={styles.memberinfo}>{data.smoking_yn}</li>
				<li className={styles.memberinfo}>{data.religion}</li>
			</ul>
		</div>
	);
}
