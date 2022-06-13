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
} from "@mui/material";
import "../styles/Card.scss";
import CardOptions from "./CardOptions.jsx";
import { ACTION_TYPE } from "../lib/enum";
// Dialog
function EditTaskDialog(props) {
  const { onClose, taskData, open } = props;
  const [newTaskName, setTaskName] = useState("");
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
export default function TaskCard(taskData) {
  const [open, setOpen] = useState(false);

  function handleAction(actionType) {
    if (actionType === ACTION_TYPE.EDIT) {
      setOpen(true);
    }
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <EditTaskDialog open={open} task={taskData} onClose={handleClose} />
      <Card sx={{ backgroundColor: "#FF6542", mr: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <div className={"txt-header text-white"}>FullStack Lesson #1</div>
          </CardContent>
          <CardOptions handleAction={handleAction} />
        </Box>
      </Card>
    </>
  );
}
