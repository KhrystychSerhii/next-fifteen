import axios from 'axios';

const headers = {
	'Content-Type': 'application/json'
};
const baseURL = 'https://api.github.com';

class Http {
	axios;
	constructor(baseURL, headers) {
		this.axios = axios.create({
			url: baseURL,
			baseURL,
			headers
		});
	}

	get(url, config = {}) {
		return this.axios.get(url, config);
	}
}

export default new Http(baseURL, headers);
