import React from "react";

import async from "../components/Async";

import {
    BookOpen,
    CreditCard,
    Grid,
    List,
    User,
    File,
    Bookmark,
    Inbox,
    Package,
    Search,
    Edit,
    FileText,
    Upload,
} from "react-feather";

import * as Icon from "@material-ui/icons";

// Auth components
const SignIn = async(() => import("../pages/auth/SignIn"));
const ResetPassword = async(() => import("../pages/auth/ResetPassword"));
const Page404 = async(() => import("../components/layouts/Page404"));
const Page500 = async(() => import("../components/layouts/Page500"));

const Simple = async(() => import("../pages/simple"));

const authRoutes = {
    path: "/auth",
    children: [
        {
            path: "/users/login",
            name: "Sign In",
            component: SignIn
        },
        {
            path: "/users/reset-password",
            name: "Reset Password",
            component: ResetPassword
        },
        {
            path: "/users/404",
            name: "404 Page",
            component: Page404
        },
        {
            path: "/users/500",
            name: "500 Page",
            component: Page500
        }
    ],
    component: null
};

const topPageRoutes = {
    path: "/",
    component: Simple,
    children: null
};

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

export const dashboardLayoutRoutes = [];
export const sidebarRoutes = [];
