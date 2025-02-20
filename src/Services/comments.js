const BASE_API = "http://127.0.0.1:8000";

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

export async function addComment(params){
    const options = {
        method: 'POST',
        body: JSON.stringify(params),
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
    }
    return fetchHandler(`${BASE_API}/comments/`,options);
}

export async function updateTask(params,ID){
    const options = {
        method: 'PUT',
        body: JSON.stringify(params),
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
    }
    return fetchHandler(`${BASE_API}/comments/${ID}`,options);
}

export async function getComments(){
    return fetchHandler(`${BASE_API}/comments/`);
}