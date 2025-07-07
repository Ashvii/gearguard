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

//api to add all jobs
export const addJobApi = async (reqBody) => {
  return await commonApi('POST', `${serverUrl}/add-job`, reqBody)
}

export const getAllJobApi = async(Searchkey)=>{
    return await commonApi('GET',`${serverUrl}/all-jobs?search=${Searchkey}`)
}

//api to delete a job
export const deleteJobApi = async(id)=>{

    return await commonApi('DELETE',`${serverUrl}/delete-jobs/${id}`)

}

//api to get all application
export const getAllApplicationApi = async()=>{

    return await commonApi('GET',`${serverUrl}/all-application`)

}

//api to add application
export const  addApplicationApi = async(reqBody,reqHeader)=>{

    return await commonApi('POST',`${serverUrl}/apply-job`,reqBody,reqHeader)
}


