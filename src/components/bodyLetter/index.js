import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Loader from "../loader";

export default function BodyLetter() {
    const [data, setData] = useState(0);
    const [card, setCard] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios("./contentJson/letter.json")
            .then((response) => {
                setData(response.data);
                setIsLoading(!data);
                if (data) {
                    setCard(
                        data.map((item, index) => {
                            return (
                                <Box
                                    key={index}
                                    sx={{ width: 1000, mt: 10 }}
                                    className={"card-letter"}
                                >
                                    <Card variant="outlined">
                                        <CardContent className="body-letter">
                                            <div class="title-letter">
                                                <h1>
                                                    <span>{item.title}</span>
                                                </h1>
                                            </div>
                                            <div className="body-letter-text">
                                                <p className="text-letter">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Box>
                            );
                        })
                    );
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [data]);

    return (
        <>
            <div>
                <div class="title-letter">
                    <h1 class="color-title-letter">
                        Letters about you
                        <span class="color-title-letter">Eu te amo</span>
                    </h1>
                </div>
                {isLoading ? <Loader className="loader" /> : card}
            </div>
        </>
    );
}
