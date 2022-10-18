import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Advertising from "./Advertising";

const Loading = () => <p>Loading ...</p>;

const Main = () => {
    return (
        <React.Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/advertising" element={<Advertising />} />
            </Routes>
        </React.Suspense>
    );
};
export default Main;
