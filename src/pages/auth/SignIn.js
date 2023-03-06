import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Helmet from 'react-helmet';

import {
    FormControl,
    Input,
    InputLabel,
    Button as MuiButton,
    Paper,
    Typography
} from "@material-ui/core";

const Button = styled(MuiButton)`
  width: 200px;
`;

const Wrapper = styled(Paper)`
  padding: ${props => props.theme.spacing(6)}px;

  ${props => props.theme.breakpoints.up("md")} {
    padding: ${props => props.theme.spacing(10)}px;
  }
`;

const BrandLogo = styled.img`
  display: block;
  width: 240px;
  text-align: center;
  margin: 12px auto;
`;


const ButtonArea = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
  margin: 12px 0 0;
`;


const SignIn = props => {

    const history = useHistory();
    const [msgError, setMsgError] = React.useState('');

    const addLogin = (e) => {
        const login_id = e.target.elements.login_id.value;
        const password = e.target.elements.password.value;
        console.log(`login_id: ${login_id}`);
        console.log(`password: ${password}`);
        if (login_id === 'admin' && password === '123456') {
            window.localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9tZHNqLXNhbGVzLXNlcnZlclwvYXBpXC9sb2dpbiIsImlhdCI6MTY3MzQyOTczMiwiZXhwIjoxOTg4OTYyNTMyLCJuYmYiOjE2NzM0Mjk3MzIsImp0aSI6IkJwZGtHTkVyTmNOd2x1V2wiLCJzdWIiOjUwMDAsInBydiI6ImUyYmEyMWExNmFmZWE4Y2JmMDVlYmY4N2JhZmU1ZWIzMDgyMzlhYzMifQ.rUCvj0a98GiG-UO4qxMilDMyIkP0ifWdbGFJapfL2FA');
            history.push({
                pathname: '/'
            });
        } else {
            setMsgError('Authentication process is fail');
        }
    };

    return (
        <Wrapper>
            <Helmet title="Authentication" />

            <Typography component="h1" variant="h4" align="center" gutterBottom>
                Authentication
            </Typography>
            <Typography align="center" style={{
                color: "#d43f3a"
            }}>{msgError}</Typography>

            <form
                onSubmit={e => {
                    e.preventDefault();
                    addLogin(e);
                }}
            >
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="login_id">Login ID</InputLabel>
                    <Input id="login_id" name="login_id" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                </FormControl>
                <ButtonArea>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                </ButtonArea>
            </form>
        </Wrapper>
    );
}

export default SignIn;
