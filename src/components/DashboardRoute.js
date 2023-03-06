import React, {useEffect, useState} from 'react';
import { Route, Redirect, withRouter } from "react-router-dom";
import { useLazyQuery } from '@apollo/client';
import { dashboardLayoutRoutes } from "../routes/index";
import DashboardLayout from "../components/layouts/Dashboard";
import Loader from "../components/Loader";

export const DashboardRoute = props => {
    const [ loginCheck, setLoginCheck ] = useState(true);
    const [ isLogin, setIsLogin ] = useState(false);

    // check AUTH when load page
    useEffect(() => {
        setIsLogin(false);
        setLoginCheck(false);
    }, [])

    if(!isLogin && !loginCheck){
        return <Redirect to={'/users/login'} />
    }

    return dashboardLayoutRoutes.map(({ id, title, children, path, component: Component }, index) =>
        children ? (
            // Route item with children
            children.map(({ name, title, path, component: Component }, index) => (
                <Route
                    key={index}
                    path={path}
                    exact
                    render={propsRoute => (
                        <DashboardLayout title={title ?? name} handleDrawerToggle={props.handleDrawerToggle}>
                            {
                                loginCheck ?
                                    Loader()
                                    :
                                    <Component {...propsRoute} />
                            }
                        </DashboardLayout>
                    )}
                />
            ))
        ) : (
            // Route item without children
            <Route
                key={index}
                path={path}
                exact
                render={propsRoute => (
                    <DashboardLayout title={title ?? id} handleDrawerToggle={props.handleDrawerToggle}>
                        {
                            loginCheck ?
                                Loader()
                                :
                                <Component {...propsRoute} />
                        }
                    </DashboardLayout>
                )}
            />
        )
    );
}

export default withRouter(DashboardRoute);
