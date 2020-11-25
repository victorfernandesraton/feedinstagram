import axios from "axios";

export const apiMock = axios.create({
	baseURL: "https://5fbc585cc09c200016d419e5.mockapi.io/instagram-clone",
	headers: {
		"Content-Type": "application/json",
	},
});
