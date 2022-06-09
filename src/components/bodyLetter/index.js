import React, {useEffect, useState} from "react";
import "./styles.css"
import axios from "axios";

export default function BodyLetter() {
    const [data, setData] = useState(0);

    useEffect(() => {
        axios('./contentJson/letter.json').then(response => {
            console.log(response.data, "data no response")
            setData(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }, [''])


    if(data){
        console.log(data, "putinha")
        return(
            <h1>TEM ALGUMA COISA NESSA MERDA DESSE DATA PUTA QUE PARIU ME DEIXA</h1>
        )
    }
    return (
        <>
            <h1>NAO TEM NADA NESSA PORRA</h1>
            {/*{data?.content.map((item, index) => {*/}
            {/*    console.log(item, index)*/}
            {/*   return <h1>{item.paragraph}</h1>*/}
            {/*    switch (item) {*/}
            {/*        case 'paragraph':*/}
            {/*            return <p key={index}>{item.paragraph}</p>;*/}
            {/*            break;*/}
            {/*        case 'image':*/}
            {/*            return <img src={item.image} alt={'default'} key={index}/>;*/}
            {/*            break;*/}
            {/*        case 'title':*/}
            {/*            return <h2 key={index}>{item.title}</h2>;*/}
            {/*            break;*/}
            {/*        case 'video':*/}
            {/*            return <iframe width={"200"} key={index} src={item.video}/>;*/}
            {/*        default:*/}
            {/*            console.log("error");*/}
            {/*    }*/}


            {/*})}*/}

        </>
    )
}