import React from "react";

export default function BodyLetter(props) {
    const data = props.data;

    console.log('DATA NO BODY', data)
    return (
        <>
            {data?.map((item, index) => {
                switch (item.content) {
                    case 'paragraph':
                        return <p key={index}>{item.paragraph}</p>;
                        break;
                    case 'image':
                        return <img src={item.image} alt={'default'} key={index}/>;
                        break;
                    case 'title':
                        return <h2 key={index}>{item.title}</h2>;
                        break;
                    case 'video':
                        return <iframe width={"200"} key={index} src={item.video}/>;
                    default:
                        console.log("error");
                }
            })}

        </>
    )
}