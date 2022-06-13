import React, { useEffect, useState } from "react";
import Loader from "../loader";
import "./styles.css";

export default function CardRainbow() {
    return (
        <>
            <a href="/">
                <button className="btn-flip btn-home-flip">HOME</button>
            </a>
            <div className="container-flip">
                <div class="card">
                    <Loader className="loader" />
                </div>
                <button className="btn-flip">
                    Hey, you! Click me, please =D{" "}
                </button>
            </div>
        </>
    );
}
