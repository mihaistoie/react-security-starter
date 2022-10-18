import React, { useRef } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { customFetch } from "../context/ajax";

const Advertising = () => {
    const containerRef = useRef<HTMLDivElement>();
    useEffect(() => {
        const getPub = async (): Promise<void> => {
            const data = await customFetch("/pub?page=0");
            if (containerRef.current) {
                containerRef.current.innerHTML = data?.$text || "";
            }
        };
        getPub().catch(console.error);
    }, []);
    return (
        <Container className="m-auto mt-5">
            <div ref={containerRef}></div>
        </Container>
    );
};

export default Advertising;
