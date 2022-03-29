import axios from "axios";

const SCRAP_LIST_URL = "http://localhost:9090/api/user/getAllScrapPost";
const ADD_SCRAP_URL = "http://localhost:9090/api/user/addScrapPost";
const DELETE_SCRAP_URL = "http://localhost:9090/api/user/deletePost";


class ScrapPostService {
    getScrapPost(){
        return axios.get(SCRAP_LIST_URL);
    }

    addScrapPost(scrappost){
        return axios.post(ADD_SCRAP_URL,scrappost);
    }

    deleteScrapPost(id){
        return axios.delete(DELETE_SCRAP_URL+'/'+id);
    }

}

export default new ScrapPostService()