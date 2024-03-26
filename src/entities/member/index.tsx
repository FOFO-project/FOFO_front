import { Member } from './model/member-info';
import { FindMember, UpdateMember, DeleteMember, InsertMember } from './api/member-api';

const MemberCard:React.FC<Member> = (param:Member) => {
    return(
        <div>
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