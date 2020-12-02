import axios from "axios";
import jwtDecode from "jwt-decode"

const apiUrl = "http://localhost:3900/api"


const tokenKey = "token"
export const login = async (email,password) => {
    const{ data: jwt } = await axios.post(apiUrl + "/auth",{ email, password });
    localStorage.setItem(tokenKey,jwt)
}
export const getCurrentUser = () => {
    const token = localStorage.getItem(tokenKey);
    return jwtDecode(token);
};
export const signUp = ({email,name,password}) => {
    return axios.post(apiUrl+"/users", {
        email: email,
        password: password,
        name: name
    })
}
export const loginWithToken = (token) => {
    localStorage.setItem(tokenKey, token);
};