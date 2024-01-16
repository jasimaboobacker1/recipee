import { BASEURL } from "./BaseURL";
import { commonAPI } from "./CommonAPI";




export const Additem = async(body)=>{
    return await commonAPI("POST",`${BASEURL}`,body,"")
 }