import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Loading from "../../components/loadingRainbow";
import card from "../../styles/components/CardRainbow.module.css";
import btn from "../../styles/components/ButtonRainbow.module.css";
import MenuBottom from "../../components/menuBottom";
import styles from "../../styles/Curiosities.module.css";

export default function Curiosities() {
    const [data, setData] = useState(false);
    const [text, setText] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("./json/curiosities.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    /**
     *
     * @returns string
     */
    const handleClick = () => {
        setLoading(true);
        const keys = Object.keys(data);
        console.log(keys[Math.floor(Math.random() * keys.length)]);
        const number = keys[Math.floor(Math.random() * keys.length)];
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        if (number) {
            setText(data[number].content);
        }
    };

    return (
        <>
        <MenuBottom/>
            <Link href="/">
                <button className={`${btn.btnRainbow} ${btn.btnHome}`}>
                    HOME
                </button>
            </Link>

            <div className={styles.containerCuriosities}>
                <div className={card.cardRainbow}>
                    {isLoading ? <Loading /> : text}
                </div>
                <button
                    onClick={handleClick}
                    className={btn.btnRainbow}
                    disabled={isLoading}
                >
                    Hey, you! Click me, please =D
                </button>
            </div>
        </>
    );
}
