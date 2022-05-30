import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./router/AppRouter";

const App = () => {
    return (
        <div>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
