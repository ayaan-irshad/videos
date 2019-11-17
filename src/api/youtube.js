import axios from "axios";

const KEY = "AIzaSyCdidPAP-y2W0IT5dpL_HRpR-DC84vzDps";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});
