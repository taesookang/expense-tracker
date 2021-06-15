import React from 'react'
import SnackBar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

export default function MsgBar({ open, setOpen }) {

    const handleClose = (event, reason) => {
        if(reason === 'clickaway') return;

        setOpen(false);
    }

    return (
        <div className="msgBar" >
            <SnackBar
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <MuiAlert
                    onClose={handleClose}
                    severity="success"
                    elevation={6}
                    variant="filled"
                >
                    Transaction successfully created
                </MuiAlert>
            </SnackBar>
            
        </div>
    )
}
