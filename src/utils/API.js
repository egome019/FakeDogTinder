import axios from "axios";

const BASEURL = "https://dog.ceo/api/breeds/image/random";

export default {
	randomDog: function () {
		return axios.get(BASEURL);
	},
	breedList: function () {
		return axios.get("https://dog.ceo/api/breeds/list/all");
	},
	search: function (breed) {
		return axios.get("https://dog.ceo/api/breeds/" + breed + "/images");
	},
};
