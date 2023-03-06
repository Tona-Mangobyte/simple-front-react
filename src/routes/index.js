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

const SimpleAsync = async(() => import("../pages/simple"));

const ProductList = async(() => import("../pages/product/List"));

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
    id: "simple",
    path: "/",
    component: SimpleAsync,
    children: null
};

const simplePageRoutes = {
    id: "simple",
    path: "/simple",
    icon: <User />,
    component: SimpleAsync,
    children: null
};

const productPageRoutes = {
    id: "product",
    path: "/product",
    icon: <Package />,
    children: [
        {
            path: "/products/list",
            name: "List",
            component: ProductList,
            title: 'Product List'
        }
    ]
};

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

export const dashboardLayoutRoutes = [
    topPageRoutes,
    simplePageRoutes,
    productPageRoutes
];
export const sidebarRoutes = [
    simplePageRoutes,
    productPageRoutes
];
