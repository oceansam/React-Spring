import axios from "axios";


export async function getTasks(){
    const res = await axios.get('http://localhost:8080/api/task')
    console.log(res.data)
    return res.data
}

export async function deleteTask(id){
    const res = await axios.delete(`http://localhost:8080/api/task/${id}`);
    console.log(res.data)
    return res;
}
export async function createTask({newTaskName, isComplete}){
    console.log(newTaskName, isComplete)
    const res = await axios.post('http://localhost:8080/api/task',  {name: newTaskName,  isComplete});
    return res.data
}