import { HeaderTest } from "../pages";
import { MemberInformation } from "../../entities/entities";
import {
	Member,
	Religion,
	Gender,
	AgeRelationType,
	Mbti,
} from "../../shared/shared";

export function MemberCardTest() {
	// for test
	const today: Date = new Date();

	const member: Member = {
		kakaoId: "opr9982",
		address: {
			zipcode: "07551",
			sido: "서울특별시",
			sigungu: "강서구",
			eupmyundong: "등촌동",
			location: {
				x: 0,
				y: 0,
			},
		},
		name: "황성준",
		gender: Gender.남자,
		birthday: new Date(),
		phoneNumber: "01012345678",
		filteringConditionAgeRelation: AgeRelationType.연상,
		company: "한화시스템",
		job: "백엔드 개발자",
		university: "단국대학교",
		mbti: Mbti.INTJ,
		smokingYn: false,
		filteringConditionSmokingYn: false,
		religion: Religion.기독교,
		filteringConditionReligion: Religion.기독교,
		charmingPoint: "저는 잘생겼습니다.",
	};
	return (
		<>
			<HeaderTest />
			<MemberInformation data={member} />
		</>
	);
}
