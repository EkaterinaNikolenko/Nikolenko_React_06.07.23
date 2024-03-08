import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, {useState} from 'react';
import LoginForm from './LoginForm';


function LoginModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
        <Button variant="outlined" onClick={handleOpen}>
          Sign in
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {/* Enter your email */}
                </DialogContentText>
                <LoginForm closeModal={handleClose} />
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default LoginModal;