import { ConditionedList } from "../../shared/shared";
import { MemberInformation } from "../../entities/entities";
import styles from "../pages.module.scss";
import { useState } from "react";

export function Test() {
	const [items, setItems] = useState([
		<MemberInformation
			data={{
				id: 1,
				/*
				address: {
					id: 1,
					zip_code: "test",
					category_first: "test si",
					category_second: "test gu",
					category_third: "test dong",
					detail: "test detail",
					road_name_cd: "test road",
					location: "incheon",
					sts: "C",
					create_dt: new Date(),
					mod_dt: new Date(),
				},
				*/
				address_cate1: "test si",
				address_cate2: "test gu",
				address_cate3: "test dong",
				tumbnail: ["picture.image_url"],
				name: "송수민1",
				gender: "male",
				age: 40,
				company: "한화시스템",
				job: "개발자",
				university: "TestUniversity",
				mbti: "ENTJ",
				smoking_yn: "N",
				kakao_id: "test1234",
				religion: "None",
				charming_point: ["good", "at", "all"],
				filtering_condition: ["No Smoking", "No alchole"],
				deposit_date: new Date(),
				note: "nothing",
				profile_card: "picture.image_url",

				pass_count: 0,
				chance: 2,

				approval_sts: "C",
				matching_sts: "C",

				sts: "C",
				create_dt: new Date(),
				mod_dt: new Date(),
			}}
		/>,
		<MemberInformation
			data={{
				id: 1,
				/*
				address: {
					id: 1,
					zip_code: "test",
					category_first: "test si",
					category_second: "test gu",
					category_third: "test dong",
					detail: "test detail",
					road_name_cd: "test road",
					location: "incheon",
					sts: "C",
					create_dt: new Date(),
					mod_dt: new Date(),
				},
				*/
				address_cate1: "test si",
				address_cate2: "test gu",
				address_cate3: "test dong",

				tumbnail: ["picture.image_url"],
				name: "송수민2",
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
				deposit_date: new Date(),
				note: "nothing",
				profile_card: "picture.image_url",

				pass_count: 0,
				chance: 2,

				approval_sts: "C",
				matching_sts: "C",

				sts: "C",
				create_dt: new Date(),
				mod_dt: new Date(),
			}}
		/>,
	]);
	return (
		<div className={styles.Page}>
			<div className={styles.container}>
				<ConditionedList
					items={items}
					setItems={setItems}
					conditionList={[
						{ name: "name", value: "name" },
						{ name: "gender", value: "gender" },
						{ name: "age", value: "age" },
						{ name: "company", value: "company" },
						{ name: "job", value: "job" },
					]}
				/>
			</div>
		</div>
	);
}
