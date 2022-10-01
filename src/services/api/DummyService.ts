import { BASE_URL_DUMMY } from "../config/Config";
import { axiosWithAppID } from "./DummyIdInterceptor";

export class DummyService {
    
    getPosts(limit:string='10') {
        return axiosWithAppID.get(`${BASE_URL_DUMMY}/post?limit=${limit}`);
    }
    getCommentsByPostId(postId:string,limit:string='10') {
        return axiosWithAppID.get(`${BASE_URL_DUMMY}/post/${postId}/comment?${limit}=10`);
       
    }
}