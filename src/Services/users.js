const BASE_API = "https://crud-tasks-etam.onrender.com";

async function fetchHandler(url,options){
    const response = await fetch(url,options)
    if(!response){
        return{
            data: null,
            isError: true
        }
    }
    const data = await response.json()
    return{
        data,
        isError: false
    }
}

export async function addUsers(params){
    const options = {
        method: 'POST',
        body: JSON.stringify(params),
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
    }
    return fetchHandler(`${BASE_API}/users/`,options);
}

export async function updateUsers(params,ID){
    const options = {
        method: 'PUT',
        body: JSON.stringify(params),
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
    }
    return fetchHandler(`${BASE_API}/users/${ID}`,options);
}

export async function deleteUsers(params){
    const options = {
        method: 'DELETE',
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
    }
    return fetchHandler(`${BASE_API}/users/${params.id}`,options);
}

export async function getUsers(){
    return fetchHandler(`${BASE_API}/users/`);
}