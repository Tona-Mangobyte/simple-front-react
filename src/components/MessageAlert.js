import React from "react";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { SNACKBAR_AUTO_HIDE_DURATION_DEFAULT } from "../utility/constant";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MessageAlert = (props) => {
    const {
        autoHideDuration = SNACKBAR_AUTO_HIDE_DURATION_DEFAULT
    } = props;

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.setOpenAlert(false);
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={props.open}
            autoHideDuration={autoHideDuration}
            onClose={handleAlertClose}
        >
            <Alert
                onClose={handleAlertClose}
                severity={props.severity}
                iconMapping={{
                    success: <CheckCircleOutlineRoundedIcon />,
                    error: <HighlightOffIcon />,
                }}
            >
                <span style={{whiteSpace: 'pre-line'}}>{`${props.message}`}</span>
            </Alert>
        </Snackbar>
    );
};

export default MessageAlert;
