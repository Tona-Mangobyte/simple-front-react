import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Helmet from 'react-helmet';
import axios from 'axios';
//import { useMutation, gql } from '@apollo/client';
//import { LOGIN } from '../../graphql/commons/User';
import queryString from 'query-string';

import {
    FormControl,
    Input,
    InputLabel,
    Button as MuiButton,
    Paper,
    Typography
} from "@material-ui/core";

//const Button = styled(MuiButton)(spacing);
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

    const addLogin = (e) => {
        history.push({
            pathname: '/'
        });
    };

    return (
        <Wrapper>
            <Helmet title="Authentication" />

            <Typography component="h1" variant="h4" align="center" gutterBottom>
                Authentication
            </Typography>
            <Typography align="center" style={{
                color: "#d43f3a"
            }}></Typography>

            <form
                onSubmit={e => {
                    e.preventDefault();
                    //addLogin({ variables: { email: e.target.elements.email.value, password: e.target.elements.password.value  } });
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
                        ログイン
                    </Button>
                </ButtonArea>
            </form>
        </Wrapper>
    );
}

export default SignIn;
