import { useEffect, useState } from "react";
import {
	Gender,
	AgeRelationType,
	Mbti,
	Religion,
	SmokingYn,
	ApiCaller,
	Fomatter,
	AppendMemberRequestDto,
} from "../../shared/shared";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import { labelColumnsMap, getMissingValueColumns } from "./labelColumnsMap";

export function MemberForm() {
	const { memberId } = useParams();
	const navigate = useNavigate();
	const [formData, setFormData] = useState(new AppendMemberRequestDto({}));

	useEffect(() => {
		if (memberId) {
			ApiCaller.get(`/members/${memberId}`).then((e) => {
				console.log(new AppendMemberRequestDto(e.data));
				setFormData(new AppendMemberRequestDto(e.data));
				return e;
			});
		}
	}, []);

	const handlePhoneNumberChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: Fomatter.PhoneNumber(value),
		}));
	};
	const handleDateChange = (e: any) => {
		let { name, value, type, checked } = e.target;
		value = new Date(value);
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
	const handleChange = (e: any) => {
		let { name, value, type, checked } = e.target;
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
	const handleAddressChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			address: {
				...prevData.address,
				[name]: value.length === 0 ? null : value,
			},
		}));
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		const missing = getMissingValueColumns(formData);
		if (missing.length > 0) {
			alert(`${missing.join(", ")}은 필수 입력 항목입니다.`);
			return;
		}
		ApiCaller.post("/member", formData)
			.then((response) => {
				alert("Success");
				navigate("/MemberForm");
			})
			.catch((e) => {
				console.error(e);
				alert("Fail");
			});
		return;
	};

	return (
		<div>
			<form
				className={classNames("container mt-5")}
				onSubmit={handleSubmit}
			>
				<h5>내 정보</h5>
				<div className="mb-3">
					<label htmlFor="kakaoId" className="form-label">
						{labelColumnsMap.kakaoId}
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
				<h6>주소</h6>
				<div className="mb-3">
					<label htmlFor="zipcode" className="form-label">
						{labelColumnsMap.address.zipcode}
					</label>
					<input
						type="text"
						className="form-control"
						id="zipcode"
						name="zipcode"
						value={formData.address.zipcode || ""}
						onChange={handleAddressChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="sido" className="form-label">
						{labelColumnsMap.address.sido}
					</label>
					<input
						type="text"
						className="form-control"
						id="sido"
						name="sido"
						value={formData.address.sido || ""}
						onChange={handleAddressChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="sigungu" className="form-label">
						{labelColumnsMap.address.sigungu}
					</label>
					<input
						type="text"
						className="form-control"
						id="sigungu"
						name="sigungu"
						value={formData.address.sigungu || ""}
						onChange={handleAddressChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="eupmyundong" className="form-label">
						{labelColumnsMap.address.eupmyundong}
					</label>
					<input
						type="text"
						className="form-control"
						id="eupmyundong"
						name="eupmyundong"
						value={formData.address.eupmyundong || ""}
						onChange={handleAddressChange}
					/>
				</div>
				<h6>내 정보</h6>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						{labelColumnsMap.name}
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
						{labelColumnsMap.gender}
					</label>
					<select
						className="form-select"
						id="gender"
						name="gender"
						value={formData.gender || ""}
						onChange={handleChange}
					>
						<option value="">선택 안함</option>
						{Object.entries(Gender).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="birthday" className="form-label">
						{labelColumnsMap.birthday}
					</label>
					<input
						type="date"
						className="form-control"
						id="birthday"
						name="birthday"
						value={
							formData.birthday
								? new Date(formData.birthday)
										.toISOString()
										.substring(0, 10)
								: ""
						}
						onChange={handleDateChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="phoneNumber" className="form-label">
						{labelColumnsMap.phoneNumber}
					</label>
					<input
						type="text"
						className="form-control"
						id="phoneNumber"
						name="phoneNumber"
						value={formData.phoneNumber || ""}
						onChange={handlePhoneNumberChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="company" className="form-label">
						{labelColumnsMap.company}
					</label>
					<input
						type="text"
						className="form-control"
						id="company"
						name="company"
						value={formData.company || ""}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="job" className="form-label">
						{labelColumnsMap.job}
					</label>
					<input
						type="text"
						className="form-control"
						id="job"
						name="job"
						value={formData.job || ""}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="university" className="form-label">
						{labelColumnsMap.university}
					</label>
					<input
						type="text"
						className="form-control"
						id="university"
						name="university"
						value={formData.university || ""}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="mbti" className="form-label">
						{labelColumnsMap.mbti}
					</label>
					<select
						className="form-select"
						id="mbti"
						name="mbti"
						value={formData.mbti || ""}
						onChange={handleChange}
					>
						<option value="">선택 안함</option>
						{Object.entries(Mbti).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="smokingYn" className="form-label">
						{labelColumnsMap.smokingYn}
					</label>
					<select
						className="form-select"
						id="smokingYn"
						name="smokingYn"
						value={formData.smokingYn || ""}
						onChange={handleChange}
					>
						<option value="">선택 안함</option>
						{Object.entries(SmokingYn).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="religion" className="form-label">
						{labelColumnsMap.religion}
					</label>
					<select
						className="form-select"
						id="religion"
						name="religion"
						value={formData.religion || ""}
						onChange={handleChange}
					>
						<option value="">선택 안함</option>
						{Object.entries(Religion).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="charmingPoint" className="form-label">
						{labelColumnsMap.charmingPoint}
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
						htmlFor="filteringAgeRelation"
						className="form-label"
					>
						{labelColumnsMap.filteringAgeRelation}
					</label>
					<select
						className="form-select"
						id="filteringAgeRelation"
						name="filteringAgeRelation"
						value={formData.filteringAgeRelation || ""}
						onChange={handleChange}
					>
						<option value="">상관없음</option>
						{Object.entries(AgeRelationType).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="filteringSmoker" className="form-label">
						{labelColumnsMap.filteringSmoker}
					</label>
					<select
						className="form-select"
						id="filteringSmoker"
						name="filteringSmoker"
						value={formData.filteringSmoker || ""}
						onChange={handleChange}
					>
						<option value="">상관없음</option>
						{Object.entries(SmokingYn).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="filteringReligion" className="form-label">
						{labelColumnsMap.filteringReligion}
					</label>
					<select
						className="form-select"
						id="filteringReligion"
						name="filteringReligion"
						value={formData.filteringReligion || ""}
						onChange={handleChange}
					>
						<option value="">상관없음</option>
						{Object.entries(Religion).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
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
