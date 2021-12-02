import styled from "styled-components";




export const PopUpWrapper = styled.section`
    background-color: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: ${({showelement}) => (showelement ? "flex" : "none")};
    justify-content: center;
    align-items: center;
`



export const PopUpContainer = styled.div`
    width: min(90%, 700px);
    max-height: 90vh;
    text-align: center;
    background-color: var(--card-bg-color);
    border-radius: var(--card-border-radius);
    overflow-y: scroll !important;
    animation: mobileMenu 0.3s ease-in-out;

    // Hide scrollbar.
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`



export const SlideImage = styled.img`
    border-top-left-radius: var(--card-border-radius);
    border-top-right-radius: var(--card-border-radius);
    width: 100%;

    @media (orientation: landscape) {
        height: 300px;
    }

    @media (min-width: 768px) {
        height: 400px;
    }
`




export const PopUpTextContainer = styled.div`
    padding: 0 1rem 0;
    text-align: left;

    @media (min-width: 768px) {
        padding: 2rem;
    }
`





export const PopUpDesc = styled.p`
    font-size: 14px;
    line-height: 1.4;
    margin: 1rem 0 2rem;

    @media (min-width: 768px) {
        margin: 0;
    }
`




export const CloseBtn = styled.button`
    margin-bottom: 1rem;
    border: 1px solid var(--header-text-color);
    border-radius: 10px;
    outline: none;
    background-color: transparent;
    color: var(--header-text-color);
    font-weight: var(--fw-bold);
    letter-spacing: 0.8px;
    text-decoration: underline;
    padding: 0.7rem 1.8rem;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    :hover {
        background-color: var(--header-text-color);
        color: var(--card-bg-color);
        text-decoration: none;
    }

    :focus {
        background-color: var(--header-text-color);
        color: var(--card-bg-color);
        text-decoration: none;
    }

    @media (min-width: 768px) {
        margin-bottom: 1.5rem;
    }
`