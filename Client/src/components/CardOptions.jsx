import { useState } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Tooltip } from "@mui/material";
import { ACTION_TYPE } from "../lib/enum";

export default function CardOptions({ handleAction }) {
  function cardAction(actionType) {
    console.log("card-action");
    handleAction(actionType);
  }

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Tooltip title="Mark as complete">
            <IconButton onClick={() => console.log("mark as complete")}>
              <TaskAltIcon style={{ color: "1E1B18" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton onClick={() => cardAction(ACTION_TYPE.EDIT)}>
              <EditIcon style={{ color: "1E1B18" }} />
            </IconButton>
          </Tooltip>
        </div>
        <Tooltip title="Delete">
          <IconButton onClick={() => console.log("Remove task")}>
            <DeleteIcon style={{ color: "1E1B18" }} />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
}