import styled from "styled-components";




export const SlideWrapper = styled.section`
    display: ${({showDiv}) => (showDiv ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
`




export const SlideContainer = styled.div`
    width: min(90%, 700px);
    background-color: var(--card-bg-color);
    width: min(90%, 700px);
    padding-bottom: 1rem;
    border-radius: var(--card-border-radius);
    max-height: 90vh;
    overflow-y: scroll !important;
    text-align: center;

    @media (orientation: landscape) {
        padding: 1rem;
    }

    @media (min-width: 360px) {
        padding-bottom: 1.5rem;
    }

    @media (min-width: 768px) {
        overflow-y: hidden !important;
        padding: 2rem 1.5rem 1.5rem;
    }
`



export const SlideImage = styled.img`
    width: 100%;
    border-radius: var(--card-border-radius);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    @media (orientation: landscape) {
        width: 60%;
    }

    @media (min-width: 768px) {
        width: 100%;
        height: auto;
    }
`




export const CloseBtn = styled.button`
    border: none;
    border-radius: 50px;
    outline: none;
    background-color: var(--header-text-color);
    color: var(--bg-color);
    font-weight: var(--fw-bold);
    letter-spacing: 0.8px;
    padding: 0.7rem 1.8rem;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    margin-top: 1rem;
    
    :hover {
        background-color: var(--btn-bg-hover-color);
    }

    :focus {
        background-color: var(--btn-bg-hover-color);
    }

    @media (orientation: landscape) {
        margin-top: 0;
    }

    @media (min-width: 768px) {
        margin-top: 1rem;
        padding: 0.8rem 1.8rem;
    }
`