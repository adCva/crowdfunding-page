import styled from "styled-components";





export const ThanksMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--card-bg-color);
    width: min(90%, 530px);
    padding: 2rem 1.5rem;
    border-radius: var(--card-border-radius); 
    animation: pledgeCard 0.3s ease-in-out;
    max-height: 95%;

    @media (min-width: 768px) {
        padding: 3rem 2rem;
    }
`




export const MessageImg = styled.img`
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        margin-bottom: 3rem;
        width: 80px;
    }
`




export const MessageTitle = styled.h2`
    font-weight: var(--fw-bold);
    font-size: 16px;
    color: var(--header-text-color); 

    @media (min-width: 360px) {
        font-size: 20px;
    }

    @media (min-width: 768px) {
        font-size: 24px;
    }
`




export const MessageParagraph = styled.p`
    margin: 1.5rem 0 2rem;
    font-size: 14px;
    line-height: 1.5;

    @media (orientation: landscape) {
        margin: 1.5rem 0 1rem;
    }

    @media (min-width: 768px) {
        margin: 1.5rem 0 2.5rem;
        font-size: 16px;
    }
`




export const MessageButton = styled.button`
    border: none;
    border-radius: 50px;
    outline: none;
    background-color: var(--btn-bg-color);
    color: var(--bg-color);
    font-weight: var(--fw-bold);
    letter-spacing: 0.8px;
    padding: 0.9rem 1.7rem;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
        
    :hover {
        background-color: var(--btn-bg-hover-color);
    }

    :focus {
        background-color: var(--btn-bg-hover-color);
    }
`