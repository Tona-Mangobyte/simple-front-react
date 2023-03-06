import React, { useState, forwardRef, useImperativeHandle } from "react";
import { connect } from "react-redux";

import Helmet from 'react-helmet';
import DateFnsUtils from "@date-io/date-fns";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import { SnackbarProvider } from 'notistack';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MessageAlert from "./components/MessageAlert";

import Routes from "./routes/Routes";
import maTheme from "./theme";
import "./assets/css/style.css";


const App = forwardRef(({ theme }, ref) => {
    return (
        <React.Fragment>
            <Helmet
                titleTemplate="%s | 販売管理システム"
                defaultTitle="明電商事 販売管理システム"
            />
            <StylesProvider injectFirst>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <MuiThemeProvider theme={maTheme[theme.currentTheme]}>
                    <ThemeProvider theme={maTheme[theme.currentTheme]}>
                        <SnackbarProvider
                            maxSnack={10}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center'
                            }}
                            iconVariant={{
                                success: <CheckCircleOutlineRoundedIcon />,
                                error: <HighlightOffIcon />,
                            }}
                        >
                            <Routes />
                            <CommonErrorMessage ref={ref}/>
                        </SnackbarProvider>
                    </ThemeProvider>
                    </MuiThemeProvider>
                </MuiPickersUtilsProvider>
            </StylesProvider>
        </React.Fragment>
    );
});

// index.jsから直接stateを変更すると、不要な再レンダリングが発生するためforwardRefを使用
const CommonErrorMessage = forwardRef((props, ref) => {
    const [openAlert, setOpenAlert] = useState(false);

    useImperativeHandle(ref, () => ({
        alert: () => setOpenAlert(true),
    }));

    return (
        <MessageAlert
            open={openAlert}
            setOpenAlert={setOpenAlert}
            message="エラーが発生しました。"
            severity="error"
        />
    );
});

export default connect(store => ({ theme: store.themeReducer }), null, null, { forwardRef: true })(App);
