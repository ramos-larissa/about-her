import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BodyLetter() {
    const [data, setData] = useState(0);

    useEffect(() => {
        axios("./contentJson/letter.json")
            .then((response) => {
                console.log(response.data, "data no response");
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [""]);

    if (data) {
        console.log(data, "putinha");
        return <h1>teste</h1>;
    }

    return (
        <>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            Word of the Day
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
