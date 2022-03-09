import axios from "axios";
const userbaseURL= "http://localhost:9090/api/user";
class UserService{
    getallscrapost(){
        return  axios.get(userbaseUrl+"ScrapPost")
    }

    //("/login") 
    // ("/addUser")
    // ("/addScrapPost")
    // ("/addBid")
    // ("/sendFeedback")
    // ("/sendReport")
    // ("/deletePost/{scrap_id}")
}