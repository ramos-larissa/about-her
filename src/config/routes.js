import React from "react";
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import Main from "../pages/Main";
import Letter from "../pages/Letter";
import NotFound from "../pages/NotFound";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/letter" element={<Letter/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Switch>
        </Router>
    );
}
