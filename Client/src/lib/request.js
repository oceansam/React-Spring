import axios from "axios";

const AXIOS = axios.create({baseURL: 'http://localhost:8080', headers:{ 'Access-Control-Allow-Origin': 'http://localhost:3000'}})

export async function getTasks(){
    const res = await AXIOS.get('http://localhost:8080/api/task')

    return res.data
}

export async function createTask({newTaskName, isComplete}){
    const res = await AXIOS.post('/api/task', {params: {name: newTaskName, isComplete}});
    console.log('Response:',res);
    return res.data
}