import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

export default function teste() {
    return (
        <Router>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
        </Router>
    );
}
