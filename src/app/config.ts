const base_url = window.location.origin;
export default {
	//server_url: " http://144.24.79.73:8080/api",
	base_url: base_url,
	api_url: `${
		base_url === "http://localhost:5173"
			? "http://144.24.85.213:8080"
			: base_url
	}/api`, //프론트 서버 url , 백엔드 서버 url은 CORS 허용이 안되어 있어 우회 사용
};
