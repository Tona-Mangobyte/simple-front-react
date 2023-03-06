import React, {useState} from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./Header";

import { spacing } from "@material-ui/system";
import {
    CssBaseline,
    Paper as MuiPaper,
    withWidth
} from "@material-ui/core";
import {
    Hidden
} from "@material-ui/core";

import { isWidthUp } from "@material-ui/core/withWidth";

const drawerWidth = 190;

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: ${props => props.theme.body.background};
  }

  .MuiCardHeader-action .MuiIconButton-root {
    padding: 4px;
    width: 28px;
    height: 28px;
  }
`;

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Drawer = styled.div`
  ${props => props.theme.breakpoints.up("md")} {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: calc(100% - 190px);
`;

const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  padding: 12px 16px 20px;
  background: ${props => props.theme.body.background};
  background-color: #E3E3E3;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

const Dashboard = ({children, routes, width, title, handleDrawerToggle}) => {

    return (
        <Root>
            <CssBaseline />
            <GlobalStyle />
            <Drawer>
            </Drawer>
            <AppContent>
                <Header onDrawerToggle={handleDrawerToggle} headerTitle={title} />
                <MainContent p={isWidthUp("lg", width) ? 10 : 1} className="mainContent">
                    {children}
                </MainContent>
                {/*<Footer />*/}
            </AppContent>
            {/*<Settings />*/}
        </Root>
    )
}

export default withWidth()(Dashboard);
