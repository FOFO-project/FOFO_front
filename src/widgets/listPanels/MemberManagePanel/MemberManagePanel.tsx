import { Member } from "../../../shared/shared";
import { ConditionListModel, Mbti, Religion, SmokingYn } from "../../../shared/shared";
import { SelectCondition
    , StringCondition
    , AddressCondition
    , FilteringCondition
    , DateCondition } from "../../../shared/component/ConditionBox/ConditionIntegrage";
import style from "./MemberManagePanel.module.scss";


interface MemberListProps {
	members: Member[];
}
interface ConditionProps {
	conditionData: ConditionListModel;
	setConditionData: Function;
}

export function MemberManagePanel({ memberListProps, conditionProps }:{memberListProps:MemberListProps, conditionProps:ConditionProps}) {
    const { members } = memberListProps;
    const { conditionData, setConditionData } = conditionProps;
    
	return (
		<>
            <table className={`table ${style.container}`}>
                <thead>
                    <tr>
                        <th className="col bg-black text-light">
                            #
                        </th>
                        <th className={`col bg-black`}>
                            <StringCondition
                                title="이름"
                                targetColumn="name"
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <DateCondition
                                title="태어난날짜"
                                targetColumn="birthday"
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <AddressCondition
                                title="사는지역"
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <StringCondition
                                title="회사"
                                targetColumn="company"
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <StringCondition
                            title="직무"
                            targetColumn="job"
                            conditionData={conditionData}
                            setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <StringCondition
                                title="출신학교"
                                targetColumn="university"
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <SelectCondition
                                title="MBTI"
                                targetColumn="mbti"
                                type={Mbti}
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <SelectCondition
                                title="흡연여부"
                                targetColumn="smoking_yn"
                                type={SmokingYn}
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <SelectCondition
                                title="종교"
                                targetColumn="religion"
                                type={Religion}
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <FilteringCondition
                                title="절대 안되는 부분"
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <StringCondition
                                title="어필 사항"
                                targetColumn="charming_point"
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <StringCondition
                                title="카카오톡"
                                targetColumn="kakao"
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <DateCondition
                                title="입금일"
                                targetColumn="deposit_date"
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                        <th className={`col bg-black`}>
                            <StringCondition
                                title="관리자멘트"
                                targetColumn="rem"
                                conditionData={conditionData}
                                setConditionData={setConditionData}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {members?.map((member) => (
                        <tr key={member.id} className="align-middle">
                            <th scope="row">
                                <input type="checkbox"/>
                            </th>
                            <td>
                                {member.name}
                            </td>
                            <td>
                                {member.getBirthdayString()}
                            </td>
                            <td>
                                {member.getAddressString()}
                            </td>
                            <td>
                                {member.company}
                            </td>
                            <td>
                                {member.job}
                            </td>
                            <td>
                                {member.university}
                            </td>
                            <td>
                                {member.mbti}
                            </td>
                            <td>
                                {member.smokingYn}
                            </td>
                            <td>
                                {member.religion}
                            </td>
                            <td>
                                {member.getFilteringString()}
                            </td>
                            <td>
                                {member.charmingPoint}
                            </td>
                            <td>
                                {member.kakaoId}
                            </td>
                            <td>
                                {member.getDepositDateString()}
                            </td>
                            <td>
                                {member.note}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
	);
}
