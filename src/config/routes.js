import React from "react";
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import Main from "../pages/Main";
import Letter from "../pages/Letter";
import SongsAboutYou from "../pages/SongsAboutYou";
import Goals from "../pages/Goals";
import Curiosities from "../pages/Curiosities";
import NotFound from "../pages/NotFound";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/letters" element={<Letter/>}/>
                <Route exact path="/songs-about-you" element={<SongsAboutYou/>}/>
                <Route exact path="/curiosities" element={<Curiosities/>}/>
                <Route exact path="/goals" element={<Goals/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Switch>
        </Router>
    );
}
