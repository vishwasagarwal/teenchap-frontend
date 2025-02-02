import fetch from 'isomorphic-fetch';
import {API} from '../../config';

export const createBlog = (blog, token) =>{
    return fetch(`${API}/blog`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            Authorization: `Bearer ${token}`
        },
        body:blog
    }).then(response =>{
        return response.json();
    }).catch(err => console.log(err))
}

export const listofBlogs = () =>{
    return fetch(`${API}/blogs`,{
        method:'GET',
        headers:{
            Accept:'application/json',
        },
    }).then(response =>{
        return response.json();
    }).catch(err => console.log(err))
}