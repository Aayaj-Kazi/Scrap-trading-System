import axios from "axios";

const SCRAP_LIST_URL = "http://localhost:8080/api/user/getAllScrapPost";

class ScrapPostService {
    getScrapPost(){
        return axios.get(SCRAP_LIST_URL);
    }
}

export default new ScrapPostService()