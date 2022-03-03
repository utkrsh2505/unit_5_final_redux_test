import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./auth.actionType"

export const login_request = ()=>{
    return {
        type : LOGIN_REQUEST
    }

}
export const login_success = (payload)=>{
    return{
        type : LOGIN_SUCCESS,
        payload : payload
    }
}
export const login_failure = ()=>{
    return{
        type : LOGIN_FAILURE
    }
   
}
export const logout_success = ()=>{
    return {
        type : LOGOUT_SUCCESS
    }
}