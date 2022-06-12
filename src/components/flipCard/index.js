import React, { useEffect, useState } from "react";
import Loader from "../loader";
import "./styles.css";

export default function FlipCard() {
    return (
        <div className="container-flip">
            <div class="card">
            <Loader className="loader"/>           
            </div>
            <button className="btn-flip">Hey, you! Click me, please =D </button>
        </div>
    );
}
