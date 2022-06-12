import React, { useEffect, useState } from "react";
import "./styles.css";

export default function ButtonMenu() {
    console.log();
    return (
        <>
            <div id="alling-buttons">
                <a href="/">
                    <button>Home</button>
                </a>
                <a href="letters">
                    <button>Letters</button>
                </a>
                <a href="songs-about-you">
                    <button>Songs</button>
                </a>
                <a href="goals">
                    <button>Goals</button>
                </a>

                {/* <button>US</button> */}

                {/* <button>About me </button> */}
            </div>
        </>
    );
}
