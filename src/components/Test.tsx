import React from "react";
import { useEffect, useState } from "react";
import { customFetch } from "../context/ajax";

const Test = () => {
    const [siretInfos, setSiretInfo] = useState({});
    useEffect(() => {
        customFetch("/api/login")
            .then((data) => {
                setSiretInfo(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <h1>{JSON.stringify(siretInfos)}</h1>
        </div>
    );
};

export default Test;
