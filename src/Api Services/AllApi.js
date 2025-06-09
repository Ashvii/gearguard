import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


//register
export const registerApi = async(reqBody)=>{

    return await commonApi('POST',`${serverUrl}/register`,reqBody)
    
}

//login 
export const loginApi = async(reqBody)=>{

    return await commonApi('POST',`${serverUrl}/login`,reqBody)
    
}

//complaint
export const complaintApi =  async(reqBody)=>{

    return await commonApi('POST',`${serverUrl}/breakdown`,reqBody)
    
}


//all complaints

export const getAllComplaintsAdminApi = async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/all-complaints`,"",reqHeader)
}

export const getAllUsersAdminApi = async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/all-users`,"",reqHeader)
}

