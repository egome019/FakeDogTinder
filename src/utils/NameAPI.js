import axios from "axios";

// const insertion = "8508e81d6c774316af134588becca2b2";

export default {
	randomNames: function () {
		return axios.get(
			"https://randommer.io/api/Name?api_key" +
				process.env.myapp +
				"/firstname/10"
		);
	},
};

// api key: 8508e81d6c774316af134588becca2b2
