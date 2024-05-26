import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";

import PrivateRoutes from "./private/PrivateRoutes";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import AddProducts from "../pages/AddProducts";
import EditProducts from "../pages/EditProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:3000/shoes"),
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
                loader: ({ params }) =>
                    fetch(`http://localhost:3000/shoes/${params.id}`),
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Registration />,
            },
            {
                path: "/all-products",
                element: <AllProducts></AllProducts>,
            },
        ],
    },
    {
        path: "dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: (
                    <PrivateRoutes>
                        <Dashboard />
                    </PrivateRoutes>
                ),
            },
            {
                path: "all-products",
                element: (
                    <PrivateRoutes>
                        <AllProducts />
                    </PrivateRoutes>
                ),
            },
            {
                path: "add-products",
                element: (
                    <PrivateRoutes>
                        <AddProducts />
                    </PrivateRoutes>
                ),
            },
            {
                path: "all-products/edit/:id",
                element: (
                    <PrivateRoutes>
                        <EditProducts />
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:3000/shoes/${params.id}`),
            },
        ],
    },
]);