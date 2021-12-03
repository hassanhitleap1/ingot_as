import {  api_url } from '../globals'
import {JSON_HEADERS} from "../common/jwt.service";

export  async  function get_all(page = 1,keywords=null) {
    let options = {
        headers :JSON_HEADERS,
        params: { page: page , keywords:keywords}};
    let  response = await axios.get(`${api_url}/clients` ,options);
    return response;
}

export  async  function create(client) {
    const response= axios.post(`${api_url}/clients`, client ,{headers :JSON_HEADERS});
    return  response;
}

export  async  function update(client,id) {
    const response= axios.put(`${api_url}/clients/`+id,client, {headers :JSON_HEADERS});
    return  response;
}

export  async  function get_one(id) {
    const response = await axios.get(`${api_url}/clients/${id}`,{headers :JSON_HEADERS});
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/clients/${id}`,{headers :JSON_HEADERS});
    return  response;
}





