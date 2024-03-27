import { Member } from './model/member-info';
import style from './ui/member.module.scss'

interface MemberEntityProps {
    param:Member
}
export function MemberCard({ param }: MemberEntityProps){
    return(
        <div className={style.container}>
            <ul>
                <li>{param.name}</li>
                <li>{param.gender}</li>
                <li>{param.age}</li>
                <li>{param.smoking_yn}</li>
                <li>{param.religion}</li>
            </ul>
        </div>
    );
}