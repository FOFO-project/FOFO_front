import { FofoHeader } from "../../widgets/header/components/FofoHeader";
import logo from "../../assets/fofologo-removebg-preview.png";
//import { AutoMatching, IndividualMatching, ManualMatching } from "../../features/features";
import {
	ManualMatch,
	IndividualMatch,
	AutoMatch,
} from "../../features/features";

export function HeaderTest() {
	const headerdata: any = {
		logo: logo,
		item1: "가입신청",
		item2: "확정대기",
		item3: "회원관리",
		item4: "매칭관리",
		item5: "매칭현황",
	};

	return (
		<>
			<FofoHeader data={headerdata} />
			{/* <AutoMatch />
			<IndividualMatch />
			<ManualMatch /> */}
		</>
	);
}
