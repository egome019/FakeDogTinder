import axios from "axios";

const BASEURL = "https://dog.ceo/api/breeds/image/random";

const randomDog = axios.get(BASEURL);

export default randomDog;
