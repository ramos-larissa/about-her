import React, { useEffect, useState } from "react";
import Loader from "../loader";
import "./styles.css";
import axios from "axios";

export default function CardRainbow() {
    const [data, setData] = useState(false);
    const [text, setText] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    /**
     * data from json 
     */
    useEffect(() => {
        axios("./contentJson/curiosities.json")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [""]);

    /**
     *
     * @returns string
     */
    const handleClick = () => {
        setIsLoading(true);
        const keys = Object.keys(data);
        console.log(keys[Math.floor(Math.random() * keys.length)]);
        const number = keys[Math.floor(Math.random() * keys.length)];
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
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
                    {isLoading ? <Loader className="loader" /> : text}
                </div>
                <button
                    onClick={handleClick}
                    className="btn-flip"
                    disabled={isLoading}
                >
                    Hey, you! Click me, please =D
                </button>
            </div>
        </>
    );
}
