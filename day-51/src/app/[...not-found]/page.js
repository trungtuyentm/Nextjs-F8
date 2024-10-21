"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";

const Container = styled.div`
    margin-left: 10rem;
    margin-top: 8rem;
`;

const Title = styled.h1`
    font-size: 5rem;
    font-family: arial;
`;
const Message = styled.span`
    font-size: 2rem;
    font-family: arial;
    display: block;
`;

const LoaderStyled = styled(ClipLoader)`
    margin-top: 35vh;
    margin-left: 50vw;
`;

const StyleLink = styled(Link)`
    font-size: 2rem;
    font-family: arial;
    display: inline-block;
    margin-top: 5rem;
    text-decoration: none;
    background: #0054e9;
    color: white;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
    transition: background-color 0.3s ease, transform 0.3s ease;
    &:hover {
        background: #0054c2;
        transform: scale(1.05);
    }
`;

export default function NotFoundDummy() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <LoaderStyled
                    background="#ccc"
                    color="#36d7b7"
                    loading={isLoading}
                    size={100}
                />
            ) : (
                <>
                    <Container>
                        <Title>404</Title>
                        <Message>
                            Page not found. Check the URL or try using the
                            search bar.
                        </Message>
                        <StyleLink href={"/"}>Home</StyleLink>
                    </Container>
                </>
            )}
        </>
    );
}
