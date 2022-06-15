import React, { useEffect, useState } from "react";
import Loader from "../loader";
import "./styles.css";
import axios from "axios";

export default function CardRainbow() {
    const [data, setData] = useState(false);
    const [text, setText] = useState(false);
    useEffect(() => {
        axios("./contentJson/curiosities.json")
            .then((response) => {
                console.log(response.data, "data no response");
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [""]);

    const handleClick = () => {
        const keys = Object.keys(data);
        console.log(keys[Math.floor(Math.random() * keys.length)]);
        const number = keys[Math.floor(Math.random() * keys.length)];
        if (number) {
            setText(data[number].content);
            return text;
        }
    };

    return (
        <>
            <a href="/">
                <button className="btn-flip btn-home-flip">HOME</button>
            </a>
            <div className="container-flip">
                <div class="card">
                    {text}
                    {console.log("text render!!", text)}
                </div>
                <button onClick={handleClick} className="btn-flip">
                    Hey, you! Click me, please =D{" "}
                    {/* <Loader className="loader" /> */}
                </button>
            </div>
        </>
    );
}
