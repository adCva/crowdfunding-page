import styled from "styled-components";





export const FreeWrapper = styled.div`
    background-color: var(--card-bg-color);
    box-shadow: var(--card-box-shadow);
    border: ${({isPledgeActive}) => (isPledgeActive ? "2px solid var(--btn-bg-hover-color)" : "2px solid var(--card-border-color)")};
    border-radius: var(--card-border-radius);
    margin-bottom: 2rem;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    @media (min-width: 768px) {
        margin-bottom: 1.5rem;
    }
`




export const FreeCardDescription = styled.div`
    padding: 2rem 1.5rem 1.5rem;

    @media (min-width: 768px) {
        display: flex;
        align-items: flex-start;
    }
`




export const FreeMobileBtnAndTitle = styled.div`
    display: flex;
    align-items: center;


    @media (min-width: 768px) {
        display: none;
    }
`




export const FreeMobileSelectBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--card-border-color);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 1rem;
`




export const FreeMobileSelectBtn = styled.button`
    background: ${({isPledgeActive}) => (isPledgeActive ? "var(--btn-bg-color)" : "transparent")};
    outline: none;
    border: none;
    border-radius: 50%;
    width: 15px;
    height: 15px;
`




export const FreeMobileTitle = styled.h4`
    font-weight: var(--fw-bold);
    color: var(--header-text-color);
    margin-bottom: 0.4rem;
`




export const FreeSelectBtnContainer = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--card-border-color);
    border-radius: 50%;
    margin-right: 1rem;
    padding: 0.25rem;

    @media (min-width: 768px) {
        display: flex;
    }
`



export const FreeSelectButton = styled.button`
    display: none;

    @media (min-width: 768px) {
        display: inline-block;
        background: ${({isPledgeActive}) => (isPledgeActive ? "var(--btn-bg-color)" : "transparent")};
        outline: none;
        border: none;
        border-radius: 50%;
        width: 10px;
        height: 10px;
    }
`




export const FreeInteractiveCardDetails = styled.div``




export const FreeTitle = styled.h4`
    display: none;
    font-weight: var(--fw-bold);
    font-size: 19px;
    color: var(--header-text-color);
    margin-right: 0.8rem;

    @media (min-width: 768px) {
        display: inline-block;
    }
`





export const FreeCardDescriptionParagraph = styled.p`
    font-weight: var(--fw-medium);
    font-size: 14px;
    margin: 1rem 0;
    line-height: 1.4;

    @media (min-width: 768px) {
        line-height: 1.5;
        font-size: 16px;
    }
`








/* ======================================== Interactve Form & Commits ======================================== */
export const FreeCardInteraction = styled.div`
    border-top: 2px solid var(--card-border-color);
    display: ${({showDiv}) => (showDiv ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.5rem 1.5rem;
    animation: mobileMenu 0.45s ease-in-out;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 1.5rem 1.5rem 2rem;
    }
`




export const FreeCardPledge = styled.p`
    font-weight: var(--fw-medium);
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`




export const FreeSubmitBtn = styled.button`
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