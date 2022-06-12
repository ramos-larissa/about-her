import React, { useEffect, useState } from "react";
import "./styles.css";

export default function ButtonMenu() {
    console.log();
    return (
        <>
            <div id="alling-buttons">
                <a href="/">
                    <button className="btn-menu">Home</button>
                </a>
                <a href="letters">
                    <button className="btn-menu">Letters</button>
                </a>
                <a href="songs-about-you">
                    <button className="btn-menu">Songs</button>
                </a>
                <a href="curiosities">
                    <button className="btn-menu">Curiosities</button>
                </a>
                <a href="goals">
                    <button className="btn-menu">Goals</button>
                </a>

                {/* <button className="btn-menu">US</button> */}

                {/* <button className="btn-menu">About me </button> */}
            </div>
        </>
    );
}
