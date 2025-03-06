import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({open,handleCloseDialog, item=""}) {
    const [originalLabel, setoriginalLabel] = useState(item);
  const handleClose = (name) => {
    handleCloseDialog(name,originalLabel);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={(e)=>handleClose(item)}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              console.log(formData.entries());
              console.log(formJson);
              handleClose(formJson.name);
            },
          },
        }}
      >
        <DialogTitle>{item ==''? 'Add':'Edit'}</DialogTitle>
        <DialogContent>
          <TextField
           id="name"
            name="name"
         label="Group Name"
         defaultValue={item}
         variant="standard"
         fullWidth
         autoFocus
         required
       />
        </DialogContent>
        <DialogActions>
          <Button onClick={(e)=>handleClose(item)}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}