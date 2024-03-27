import { Member } from './model/member-info';
import styles from './ui/member.module.scss'

interface MemberEntityProps {
    param:Member
}

export function MemberCard({ param }: MemberEntityProps){
    return(
        <div className={styles.container}>
            <ul className={styles.memberline}>
                <li className={styles.memberinfo}>{param.name}</li>
                <li className={styles.memberinfo}>{param.gender}</li>
                <li className={styles.memberinfo}>{param.age}</li>
                <li className={styles.memberinfo}>{param.smoking_yn}</li>
                <li className={styles.memberinfo}>{param.religion}</li>
            </ul>
        </div>
    );
}