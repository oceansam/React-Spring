import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  TextField,
  Switch,
  CircularProgress,
  Grid,
} from "@mui/material";
import "./App.scss";
import { createTask, getTasks } from "./lib/request";
import TaskCard from "./components/TaskCard";
function App() {
  // Task completion
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [pendingTaskList, setPendingTaskList] = useState([]);

  const [newTaskName, setTaskName] = useState("");

  function addTask() {
    createTask({ newTaskName, isComplete });
    fetchTasks();
  }

  // Run async method in useEffect lifecycle
  async function fetchTasks() {
    setLoading(true);

    const taskRes = await getTasks();
    setTaskList(taskRes.filter((task) => task.isComplete));
    setPendingTaskList(taskRes.filter((task) => !task.isComplete));
    setLoading(false);
  }
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <h6 className="txt-header text-white text-center">Todo App</h6>
      <Grid container spacing={2} sx={{ px: 5 }}>
        <Grid item xs={3}>
          <Box className="row justify-center text-white">Pending</Box>
          {isLoading ? (
            <CircularProgress />
          ) : (
            pendingTaskList.map((task, i) => (
              <TaskCard fetchTasks={fetchTasks} task={task} key={i} />
            ))
          )}
        </Grid>
        <Grid item xs={3}>
          <Box className="row justify-center text-white">Completed</Box>
          {isLoading ? (
            <CircularProgress />
          ) : (
            taskList.map((task, i) => (
              <TaskCard
                task={task}
                fetchTasks={fetchTasks}
                key={i}
                customColor="#88498F"
              />
            ))
          )}
        </Grid>
        <Grid item xs={6}>
          <Box className="row justify-center">
            <div>
              <Card sx={{ width: "350px" }}>
                <div className="txt-lg text-black">Add Task</div>
                <CardContent>
                  <TextField
                    variant="filled"
                    label="Task Name"
                    value={newTaskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                  <div>
                    <Switch
                      checked={isComplete}
                      onChange={(e) => setIsComplete(!isComplete)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <div>Is Complete?</div>
                  </div>
                </CardContent>
                <CardActionArea>
                  <Button
                    variant="contained"
                    sx={{ width: "100%" }}
                    onClick={addTask}
                  >
                    Add Task
                  </Button>
                </CardActionArea>
              </Card>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
