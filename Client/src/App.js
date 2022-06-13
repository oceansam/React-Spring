import {useState} from "react"
import { Box, Button, Card, CardActionArea, CardContent, TextField, Switch } from '@mui/material';
import './App.scss';
import TaskCard from "./components/TaskCard.jsx";
import {    createTask,
  getTasks
} from "./lib/request";
function App() {

  // Task completion
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (event) => {
    setIsComplete(event.target.isComplete);
  };

  const [newTaskName, setTaskName] = useState("");

  function addTask(){
    console.log({newTaskName, isComplete })
    console.log("Adding Task")
    // createTask({newTaskName,isComplete })
    getTasks();
  }

  return (
    <div className="App">
      <h6 className="txt-header text-white">Todo App</h6>

      <Box
      sx={{display: 'flex', justifyContent: 'center'}}
      >
        <div>

      <Card sx={{width: '350px'}}>
        <div className="txt-lg text-black">Add Task</div>
        <CardContent>
        <TextField variant="filled" label="Task Name"
            value={newTaskName}
            onChange={(e) => setTaskName(e.target.value)}
          
        />
        <div>
        <Switch
        isComplete={isComplete}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        />
        <div>Is Complete?</div>
        </div>
 
        </CardContent>
        <CardActionArea>
        <Button variant="contained" sx={{width: '100%'}} onClick={addTask}>Add Task</Button>

        </CardActionArea>
      </Card>
      </div>

      </Box>

      <Box sx={{display: 'flex', justifyContent: "center", m:1}}>
        {
          [1,2,3,4].map((num) => {
            return <TaskCard />

          })
        }
      </Box>
    </div>
  );
}

export default App;
