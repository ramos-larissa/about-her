import React, {useEffect, useState} from "react";
import "./styles.css";
import axios from "axios";
import BodyLetter from "../../components/bodyLetter";

export default function Letter() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios('./contentJson/letter.json').then(response => {
            setData(response.data)
            return data
        }).catch((error) => {
            console.log(error);
        });
    }, [data])

    return (
        <>
            <h2>Hello world!</h2>
            <h2>Teste 2</h2>
            <BodyLetter data={data}/>
        </>
    )
}