import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/MainPage";
import UserDetailPage from "../pages/UserDetailPage";
import Users from "../Users/Users";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetailPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRouter;
