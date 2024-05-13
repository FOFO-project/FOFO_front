import { AppendMemberRequestDto } from "../../../shared/shared";

export const labelColumnsMap: any = {
	kakaoId: "카카오톡 ID(Kakao ID)",
	sido: "시도",
	sigungu: "시군구",
	eupmyundong: "읍면동",
	name: "이름(Name)",
	gender: "성별(Gender)",
	birthday: "생년월일(Birthday)",
	height: "키(Height)",
	phoneNumber: "전화번호(Phone Number)",
	filteringAgeRelation: "절대 안되는 나이조건(연상/동갑/연하)(Age Relation)",
	company: "회사명(Company)",
	job: "직무(Job)",
	university: "출신학교(University)",
	mbti: "MBTI",
	smokingYn: "흡연여부(Smoking)",
	filteringSmoker: "상대방 흡연여부(Smoking)",
	religion: "종교(Religion)",
	filteringReligion: "절대 안되는 종교(Religion)",
	charmingPoint: "어필 사항(Charming Point)",
	userProfileImages: "프로필 이미지(User Profile Images)",
};

export const except: string[] = [
	"eupmyundong",
	"phoneNumber",
	"filteringAgeRelation",
	"filteringReligion",
	"charmingPoint",
];

export function getMissingValueColumns(data: AppendMemberRequestDto) {
	const missing = [];
	for (const key of Object.keys(data)) {
		if (except.includes(key as keyof AppendMemberRequestDto)) {
			continue;
		}
		if (data[key as keyof AppendMemberRequestDto] === null) {
			missing.push(labelColumnsMap[key]);
		}
	}

	return missing;
}
