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

export async function addTask(params){
    const options = {
        method: 'POST',
        body: JSON.stringify(params),
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
    }
    return fetchHandler(`${BASE_API}/tasks/`,options);
}

export async function updateTask(params,ID){
    const options = {
        method: 'PUT',
        body: JSON.stringify(params),
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
    }
    return fetchHandler(`${BASE_API}/tasks/${ID}`,options);
}

export async function deleteTask(params){
    const options = {
        method: 'DELETE',
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
    }
    return fetchHandler(`${BASE_API}/tasks/${params.id}`,options);
}

export async function getTasks(){
    return fetchHandler(`${BASE_API}/tasks/`);
}