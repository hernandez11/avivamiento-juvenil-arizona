import styled from "styled-components";

export const Subheader__text = styled.p`
    color: #000;
    font-weight: 500;
    font-size: 1rem;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const Hero__title = styled.h1`
    color: #000;
    font-family: Source Code Pro;
    font-weight: 800;
    font-size: 9vw;
    margin: 5% 0;

    @media (max-width: 768px) {
        font-size: 12vw;
        margin: 10% 0;
    }
`;

export const Principle__container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: top;
    padding: 50px 0;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Principle__itemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 25px 0;

    @media (max-width: 768px) {
        width: 40%;
    }
`;

export const Principle__itemT = styled.span`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

export const Item__num = styled.h1`
    font-family: 'K2D', sans-serif;
    font-size: 5rem;
    font-weight: 400;
    margin: 0 0;
`;

export const Item__key = styled.p`
    font-family: 'Ubuntu Mono', monospace;
    margin: 10px 0;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 2px;
`;

export const Principle__itemB = styled.p`
    text-align: left;
    font-weight: 300;
    font-family: 'Ubuntu Mono', monospace;
`;
