import { useState } from "react";
import {
  Box,
  DialogTitle,
  Dialog,
  CardContent,
  Card,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Divider,
} from "@mui/material";
import "../styles/Card.scss";
import CardOptions from "./CardOptions.jsx";
import { deleteTask } from "../lib/request";

import { ACTION_TYPE } from "../lib/enum";
// Dialog
function EditTaskDialog(props) {
  const { onClose, task, open } = props;
  const [newTaskName, setTaskName] = useState(task.name);
  function handleClose() {
    setTaskName("");
    onClose();
  }

  function updateTask() {
    setTaskName("");
    onClose();
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-basic"
          label="Task Name"
          variant="filled"
          value={newTaskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={updateTask} variant="contained">
          Update Task
        </Button>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// Task Card
export default function TaskCard(props) {
  const [open, setOpen] = useState(false);
  const { fetchTasks } = props;
  function handleAction(actionType) {
    if (actionType === ACTION_TYPE.EDIT) {
      setOpen(true);
    }
    if (actionType === ACTION_TYPE.DELETE) {
      deleteTask(props.task.id);
      fetchTasks();
    }
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <EditTaskDialog open={open} task={props.task} onClose={handleClose} />
      <Card
        sx={{
          backgroundColor: props.customColor || "#FF6542",
          mt: 3,
          maxWidth: "350px",
        }}
      >
        <Box>
          <CardContent>
            <div className={"txt-header text-white"}>{props.task.name}</div>
            <Divider textAlign="left" />
          </CardContent>
          <CardOptions handleAction={handleAction} taskData={props.task} />
        </Box>
      </Card>
    </>
  );
}
