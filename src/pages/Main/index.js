import React, { useEffect, useState } from "react";
import TestService from "../../service/TestService";
import CardImage from "../../components/cardImage";
import logo from "../../assets/logo.svg";
import "./styles.css";

export default function Main() {
    const [body, setBody] = useState(0);
    const url = "/test-front-basic"

    useEffect(() => {
        TestService.getFront(url)
            .then((response) => {
                setBody(response);
                return body;
            })
            .catch((error) => {
                console.log(error);
            });
    }, [url]);

    useEffect( ( ) => {
        axios('./aboutHer.json').then(response => {
            const { data } = response;
            return data
        }).catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <>
            <div className="content-title">
                <img src={logo} className="logo-title" />
            </div>
            <div className="content-card">
                <CardImage response={body} />
            </div>
        </>
    );
}
