import { MemberInformation } from "../../entities/entities";
import {
	Member,
	Address,
	Picture,
} from "../../entities/member/model/model-integrate";

export function MemberCardTest() {
	// for test
	const today: Date = new Date();

	const address: Address = {
		id: 1,
		zip_code: "test",
		category_first: "test si",
		category_second: "test gu",
		category_third: "test dong",
		detail: "test detail",
		road_name_cd: "test road",
		location: "incheon",
		sts: "C",
		create_dt: today,
		mod_dt: today,
	};

	const picture: Picture = {
		id: 1,
		member_id: 1,

		type: "thumb",
		image_url: "12345",
		sts: "C",
		create_dt: today,
		mod_dt: today,
	};

	const member: Member = {
		id: 1,
		address: address,

		tumbnail: [picture.image_url],
		name: "송수민",
		gender: "male",
		age: 30,
		company: "한화시스템",
		job: "개발자",
		university: "TestUniversity",
		mbti: "ENTJ",
		smoking_yn: "N",
		kakao_id: "test1234",
		religion: "None",
		charming_point: ["good", "at", "all"],
		filtering_condition: ["No Smoking", "No alchole"],
		deposit_date: today,
		note: "nothing",
		profile_card: picture.image_url,

		pass_count: 0,
		chance: 2,

		approval_sts: "C",
		matching_sts: "C",

		sts: "C",
		create_dt: today,
		mod_dt: today,
	};
	return (
		<>
			<MemberInformation data={member} />
		</>
	);
}
