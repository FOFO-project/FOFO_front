import { AutoMatch, IndividualMatch, ManualMatch } from "../../features/features";
import { HeaderTest } from "../../widgets/header/HeaderTest";
import {
	Member,
	Religion,
	Gender,
	AgeRelationType,
	Mbti,
} from "../../shared/shared";

export function ButtonTest() {
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
		gender: Gender.MAN,
		birthday: new Date(),
		phoneNumber: "01012345678",
		filteringConditionAgeRelation: AgeRelationType.OLDER,
		company: "한화시스템",
		job: "백엔드 개발자",
		university: "단국대학교",
		mbti: Mbti.INTJ,
		smokingYn: false,
		filteringConditionSmokingYn: false,
		religion: Religion.CHRISTIANITY,
		filteringConditionReligion: Religion.CHRISTIANITY,
		charmingPoint: "저는 잘생겼습니다.",
	};

	return (
		<>
            <HeaderTest />
			<AutoMatch />
			<IndividualMatch members={[member]}/>
			<ManualMatch members={[member]}/>
		</>
	);
}
