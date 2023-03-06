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
        // const token = window.localStorage.getItem('token');
        // console.log(`token: `, token);
        console.log(`dashboardLayoutRoutes: `, dashboardLayoutRoutes);
        /*if (token) {
            setIsLogin(true);
            setLoginCheck(false);
        }
        setIsLogin(false);
        setLoginCheck(false);*/
    }, [])
    console.log(`isLogin: ${isLogin}`);
    console.log(`loginCheck: ${loginCheck}`);
    /*if(!isLogin && !loginCheck){
        return <Redirect to={'/users/login'} />
    }*/

    return dashboardLayoutRoutes.map(({ id, title, children, path, component: Component }, index) => {
        console.log(`id: ${id}`);
        console.log(`title: ${title}`);
        console.log(`path: ${path}`);
        console.log(children?.component);
        return children ? (
            // Route item with children
            children.map(({ name, title, path, component: Component }, index) => (
                <Route
                    key={index}
                    path={path}
                    exact
                    render={propsRoute => (
                        <DashboardLayout title={title ?? name} handleDrawerToggle={props.handleDrawerToggle}>
                            {
                                /*loginCheck ?
                                    Loader()
                                    :
                                    <Component {...propsRoute} />*/
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
                    <DashboardLayout title={title ?? id ?? 'Simple23'} handleDrawerToggle={props.handleDrawerToggle}>
                        {
                            /*loginCheck ?
                                Loader()
                                :
                                <Component {...propsRoute} />*/
                            <Component {...propsRoute} />
                        }
                    </DashboardLayout>
                )}
            />
        )
    });
}

export default withRouter(DashboardRoute);
