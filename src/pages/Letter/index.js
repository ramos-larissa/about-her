import React, {useEffect, useState} from "react";
import "./styles.css";
import axios from "axios";
import BodyLetter from "../../components/bodyLetter";
import Menu from "../../components/menu";

export default function Letter() {


    return (
        <>

            <Menu/>

            <BodyLetter/>
        </>
    )
}