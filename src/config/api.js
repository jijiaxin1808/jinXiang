import Axios from "../utils/axios";
import spliceUrl from "../utils/params";

export function loginByPwd(data) {
    const url = "users/loginByPwd";
    return Axios(url, data, "POST");
}
export function getAllbootPages(params) {
    const url = "bootPages/listAll"
    return Axios(spliceUrl(url, params));
}
export function topSearchCreate(data) {
    const url = "topSearchs/create";
    return Axios(url, data, "POST");
}
export function getAlltopSearch(params) {
    const url = "topSearchs/listAll"
    return Axios(spliceUrl(url, params));
}
export function deletetopSearch(params) {
    const url = "topSearchs/delete"
    return Axios(spliceUrl(url, params), {}, "DELETE");
}
export function updatetopSearch(data) {
    const url = "topSearchs/updateShowed"
    return Axios(url, data, "PUT");
}
export function createopenPage(data) {
    const url = "bootPages/create";
    return Axios(url, data, "POST");
}
export function deleteopenPage(params) {
    const url = "bootPages/delete"
    return Axios(spliceUrl(url, params), {}, "DELETE");
}
export function searchUsers(params) {
    const url = "users/listByLike";
    return Axios(spliceUrl(url, params));
}
export function getGooodstopSearch() {
    const url = "goods/getTopSearch"
    return Axios(url);
}

export function deleteGoodsTopSearch(data) {
    const url = "goods/addTopSearchFilter";
    return Axios(url, data, "POST")
}

export function getBlockedList(params) {
    const url = "users/listBlocked";
    return Axios(spliceUrl(url, params));
}
export function blockUser(data) {
    const url = "admins/blockAccount";
    return Axios(url, data, "PUT"); 
}


