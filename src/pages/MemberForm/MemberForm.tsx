import { useState } from "react";
import {
	Member,
	Gender,
	AgeRelationType,
	Mbti,
	Religion,
	SmokingYn,
	ApiCaller,
} from "../../shared/shared";
import page_styles from "../pages.module.scss";
import { useAsync } from "react-async";

export function MemberForm() {
	useAsync({
		promiseFn: async () => {
			return ApiCaller.get("/members").then((e) => {
				console.log(e);
				return e;
			});
		},
	});

	const [formData, setFormData] = useState(new Member({}));

	const handleChange = (e: any) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]:
				type === "checkbox"
					? checked
					: value.length === 0
					? null
					: value,
		}));
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(JSON.stringify(formData, null, 2));
	};

	return (
		<div className={page_styles.Page}>
			<form className="container mt-5" onSubmit={handleSubmit}>
				<h5>내 정보</h5>
				<div className="mb-3">
					<label htmlFor="kakaoId" className="form-label">
						카카오톡 ID(Kakao ID):
					</label>
					<input
						type="text"
						className="form-control"
						id="kakaoId"
						name="kakaoId"
						value={formData.kakaoId || ""}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						이름(Name):
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={formData.name || ""}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="gender" className="form-label">
						성별(Gender):
					</label>
					<select
						className="form-select"
						id="gender"
						name="gender"
						value={formData.gender || ""}
						onChange={handleChange}
					>
						<option value="">선택 안함</option>
						<option value={Gender.MAN}>Male</option>
						<option value={Gender.WOMAN}>Female</option>
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="birthday" className="form-label">
						생년월일(Birthday):
					</label>
					<input
						type="date"
						className="form-control"
						id="birthday"
						name="birthday"
						value={formData.birthday?.toString() || ""}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="phoneNumber" className="form-label">
						전화번호(Phone Number):
					</label>
					<input
						type="text"
						className="form-control"
						id="phoneNumber"
						name="phoneNumber"
						value={formData.phoneNumber || ""}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="mbti" className="form-label">
						MBTI:
					</label>
					<select
						className="form-select"
						id="mbti"
						name="mbti"
						value={formData.mbti || ""}
						onChange={handleChange}
					>
						<option value="">선택 안함</option>
						{Object.values(Mbti).map((type) => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="smokingYn" className="form-label">
						흡연여부(Smoking):
					</label>
					<select
						className="form-select"
						id="smokingYn"
						name="smokingYn"
						value={formData.smokingYn || ""}
						onChange={handleChange}
					>
						<option value="">선택 안함</option>
						{Object.values(SmokingYn).map((religion) => (
							<option key={religion} value={religion}>
								{religion}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="religion" className="form-label">
						종교(Religion):
					</label>
					<select
						className="form-select"
						id="religion"
						name="religion"
						value={formData.religion || ""}
						onChange={handleChange}
					>
						<option value="">선택 안함</option>
						{Object.values(Religion).map((religion) => (
							<option key={religion} value={religion}>
								{religion}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="charmingPoint" className="form-label">
						어필 사항(Charming Point):
					</label>
					<textarea
						className="form-control"
						id="charmingPoint"
						name="charmingPoint"
						value={formData.charmingPoint || ""}
						onChange={handleChange}
					/>
				</div>
				<h5>원하는 상대 정보</h5>
				<div className="mb-3">
					<label
						htmlFor="filteringConditionAgeRelation"
						className="form-label"
					>
						연상/동갑.연하(Age Relation):
					</label>
					<select
						className="form-select"
						id="filteringConditionAgeRelation"
						name="filteringConditionAgeRelation"
						value={formData.filteringConditionAgeRelation || ""}
						onChange={handleChange}
					>
						<option value="">상관없음</option>
						{Object.values(AgeRelationType).map((type) => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="filteringSmoker" className="form-label">
						흡연여부(Smoking):
					</label>
					<select
						className="form-select"
						id="filteringSmoker"
						name="filteringSmoker"
						value={formData.filteringSmoker || ""}
						onChange={handleChange}
					>
						<option value="">상관없음</option>
						{Object.values(SmokingYn).map((type) => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label
						htmlFor="filteringConditionReligion"
						className="form-label"
					>
						종교(Religion):
					</label>
					<select
						className="form-select"
						id="filteringConditionReligion"
						name="filteringConditionReligion"
						value={formData.filteringConditionReligion || ""}
						onChange={handleChange}
					>
						<option value="">상관없음</option>
						{Object.values(Religion).map((type) => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</select>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
