import React, { useEffect, useState } from "react";
import TestService from "../../service/TestService";
import Menu from "../../components/menu";
import Heart from "../../components/heart";
import "./styles.css";

export default function Main() {
    const [body, setBody] = useState(0);
    const url = "/test-front-basic";

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

    // useEffect( ( ) => {
    //     axios('./aboutHer.json').then(response => {
    //         const { data } = response;
    //         return data
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }, [])

    return (
        <div className="home">
            <Menu />

            <div className="center">
                <ul>
                    <li>
                        <input type="checkbox" />
                        <div className="content-div">I</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div className="content-div"></div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div className="content-div">L</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div className="content-div">O</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div className="content-div">V</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div className="content-div">E</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div className="content-div"></div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div className="content-div">Y</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div className="content-div">O</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div className="content-div">U</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div className="content-div">!</div>
                    </li>
                </ul>
            </div>

            <div>
            <p class="btn-shine">Don't forget! This website will be under constant construction, as my love for you.</p>
            </div>
        </div>
    );
}
