import axios from "axios";
import { login_failure, login_request, login_success } from "./auth.action";

export const Auth_api=(params)=>(dispatch)=>{
dispatch(login_request());
axios
.post("https://reqres.in/api/login",params)
.then((res)=>{
    dispatch(login_success(res.data.token));
})
.catch((err)=>{
    dispatch(login_failure())
    console.log(err)
})
}