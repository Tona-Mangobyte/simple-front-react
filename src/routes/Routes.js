import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { authLayoutRoutes } from "./index";
import styled from "styled-components";

import AuthLayout from "../components/layouts/Auth";
import Page404 from "../components/layouts/Page404";
import DashboardRoute from '../components/DashboardRoute';

import Sidebar from "../components/Sidebar";
import {
    Hidden
} from "@material-ui/core";

const drawerWidth = 190;

const Drawer = styled.div`
  ${props => props.theme.breakpoints.up("md")} {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
`;

const childRoutes = (Layout, routes) =>
    routes.map(({ children, path, component: Component }, index) =>
        children ? (
            // Route item with children
            children.map(({ path, component: Component }, index) => (
                <Route
                    key={index}
                    path={path}
                    exact
                    render={props => (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    )}
                />
            ))
        ) : (
            // Route item without children
            <Route
                key={index}
                path={path}
                exact
                render={props => (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )}
            />
        )
    );

const DisplaySideBar = withRouter((props) => {
    const [pathName, setPathName] = React.useState(props?.history?.location?.pathname);


    const IsNotDisplay = () => {
        let result = false;

        Object.entries(authLayoutRoutes).forEach(([key, value]) => {
            Object.entries(value.children).forEach(([i, route]) => {
                if(route.path === pathName){
                    result = true;
                    return false;
                }
            });
        });

        return result;
    }

    props.history.listen((location) => {
        setPathName(location.pathname);
    });

    return (
        <React.Fragment>
            {IsNotDisplay()?'':
                <Drawer>
                    <Hidden mdUp implementation="js">
                        <Sidebar
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={props.mobileOpen}
                            setMobileOpen={props.setMobileOpen}
                            onClose={props.handleDrawerToggle}
                        />
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Sidebar
                            PaperProps={{ style: { width: drawerWidth } }}
                            setMobileOpen={props.setMobileOpen}
                            onClose={props.handleDrawerToggle}
                        />
                    </Hidden>
                </Drawer>
            }
        </React.Fragment>
    )
});

const Routes = React.memo((props) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Router basename={process.env.REACT_APP_ROUTER_BASE_URL}>
            <DisplaySideBar
                handleDrawerToggle={handleDrawerToggle}
                setMobileOpen={setMobileOpen}
                mobileOpen={mobileOpen}
            />
            <Switch>
                {childRoutes(AuthLayout, authLayoutRoutes)}
                <DashboardRoute handleDrawerToggle={handleDrawerToggle} />
                <Route
                    render={() => (
                        <AuthLayout>
                            <Page404 />
                        </AuthLayout>
                    )}
                />
            </Switch>
        </Router>
    )});

export default Routes;
