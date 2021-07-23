import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HeaderContainer = styled.div`
    max-width: 100vw;
    height: 80px;
    color: white;
    background: #fe5f55;
    display: flex;
    justify-content: center;
`;
export const AboutLink = styled(LinkR)`
    display: block;
    position: absolute;
    top: 1.5em;
    left: 5em;
    font-size: 1.2em;
    text-decoration: none;
    color: white;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const HeaderLogo = styled(LinkR)`
    color: white;
    display: block;
    position: absolute;
    top: 0.5em;
    font-size: 2em;
    text-decoration: none;
`;
export const SignInLink = styled(LinkR)`
    display: block;
    position: absolute;
    top: 1.5em;
    right: 5em;
    font-size: 1.2em;
    text-decoration: none;
    color: white;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
