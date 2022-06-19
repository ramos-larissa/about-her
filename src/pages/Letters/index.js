import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import BodyLetter from "../../components/bodyLetter";
import ButtonBack from "../../components/buttonBack";

export default function Letters() {
    return (
        <>
            <div className="btn-back-letters">
                <ButtonBack />
            </div>
            <div className="page-letters">
                <BodyLetter />
            </div>
        </>
    );
}
