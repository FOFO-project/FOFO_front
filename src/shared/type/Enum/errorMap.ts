const errorMessages: Record<string, string> = {
	COME500: "시스템 에러입니다. 관리자에게 문의부탁드립니다.", // 시스템 에러
	COME502: "입력 형식 오류",
	MEME500: "카카오ID 중복 입니다.", // Member 관련 에러
	MEME501: "해당 회원이 없습니다",
	MEME502: "주소 없음",
	MEME506:
		"해당 회원은 매칭 불가 상태입니다.(매칭 상태 아님 / 매칭 기회 소진)",
	MATE500: "해당 매칭은 이미 완료되었습니다.", // Match 관련 에러
	MATE501: "취소 불가 매칭이 있습니다.",
	MATE502: "매칭 가능한 회원이 없음",
	MATE503: "해당 매칭잉 없습니다.",
	MATE504: "매칭 대상이 같은 성별 입니다.",
	ENCE500: "AES encrypt error has occurred", // 유틸 관련 에러
	ENCE501: "AES decrypt error has occurred",
	IMGE500: "파일이 없습니다.", // Image 관련 에러
};

export function errorCodeToMessage(code: string) {
	const message = errorMessages[code];
	return message ? message : "알 수 없는 에러가 발생했습니다.";
}
