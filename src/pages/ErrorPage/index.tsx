import React from "react";
import { useNavigate } from "react-router-dom";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";

import * as S from "./styled";

function ErrorPage() {
    const navigate = useNavigate();
    const handleClick = () => navigate("/");

    return (
        <>
            <Header isHomePage={false} />
            <S.Main>
                <S.Heading1>404</S.Heading1>
                <S.ErrorMessage>OOOps! Page Not Found</S.ErrorMessage>
                <S.Suggestion>
                    This page doesn’t exist or was removed! We suggest you back
                    to home
                </S.Suggestion>
                <HomeButton handleClick={handleClick} />
            </S.Main>
            <Footer />
        </>
    );
}

export default ErrorPage;
