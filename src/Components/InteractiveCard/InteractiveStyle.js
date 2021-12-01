import styled from "styled-components";





export const InteractiveWrapper = styled.div`
    background-color: var(--card-bg-color);
    box-shadow: var(--card-box-shadow);
    border: ${({isPayedPledgeActive}) => (isPayedPledgeActive ? "2px solid var(--btn-bg-hover-color)" : "2px solid var(--card-border-color)")};
    border-radius: var(--card-border-radius);
    margin-bottom: 2rem;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    @media (min-width: 768px) {
        margin-bottom: 1.5rem;
    }
`




export const InteractiveCardDescription = styled.div`
    padding: 2rem 1.5rem 1.5rem;

    @media (min-width: 768px) {
        display: flex;
        align-items: flex-start;
    }
`




export const MobileBtnAndTitle = styled.div`
    display: flex;
    align-items: center;


    @media (min-width: 768px) {
        display: none;
    }
`




export const MobileSelectBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--card-border-color);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 1rem;
`




export const MobileSelectBtn = styled.button`
    background: ${({isPayedPledgeActive}) => (isPayedPledgeActive ? "var(--btn-bg-color)" : "transparent")};
    outline: none;
    border: none;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    transition: all 0.25s ease-in-out;
`




export const MobileInteractiveTitleContainer = styled.div``




export const MobileTitle = styled.h4`
    font-weight: var(--fw-bold);
    color: var(--header-text-color);
    margin-bottom: 0.4rem;
`




export const MobileInitialValue = styled.p`
    font-size: 15px;
    color: var(--btn-bg-color);
`




export const SelectBtnContainer = styled.div`
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



export const SelectButton = styled.button`
    display: none;

    @media (min-width: 768px) {
        display: inline-block;
        background: ${({isPayedPledgeActive}) => (isPayedPledgeActive ? "var(--btn-bg-color)" : "transparent")};
        outline: none;
        border: none;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        cursor: pointer;
        transition: all 0.25s ease-in-out;
    }
`




export const InteractiveCardDetails = styled.div``




export const InteractiveShortDetails = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`




export const InteractiveTitleContainer = styled.div`
    display: flex;
    align-items: center;
`




export const Title = styled.h4`
    font-weight: var(--fw-bold);
    font-size: 19px;
    color: var(--header-text-color);
    margin-right: 0.8rem;
`




export const InitialValue = styled.p`
    font-weight: var(--fw-medium);
    font-size: 16px;
    color: var(--btn-bg-color);
`




export const InteractiveDeadline = styled.div`
    display: flex;
    align-items: center;
`




export const InteractiveDays = styled.h3`
    font-weight: var(--fw-bold);
    font-size: 22px;
    color: var(--header-text-color);
    margin-right: 0.35rem;
`




export const InteractiveUnit = styled.p`
    font-weight: var(--fw-medium);
    font-size: 15px;
`





export const CardDescription = styled.p`
    font-weight: var(--fw-medium);
    font-size: 14px;
    margin: 1rem 0;
    line-height: 1.4;

    @media (min-width: 768px) {
        line-height: 1.5;
        font-size: 16px;
    }
`




export const MobileInteractiveDeadline = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        display: none;
    }
`



export const MobileInteractiveDays = styled.h3`
    font-weight: var(--fw-bold);
    font-size: 22px;
    color: var(--header-text-color);
    margin-right: 0.35rem;
`




export const MobileInteractiveUnit = styled.p`
    font-weight: var(--fw-medium);
    font-size: 15px;
`








/* ======================================== Interactve Form & Commits ======================================== */
export const CardInteraction = styled.div`
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




export const CardPledge = styled.p`
    font-weight: var(--fw-medium);
`




export const CardForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;

    @media (min-width: 768px) {
        margin-top: 0;
    }
`




export const FormGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--card-border-color);
    border-radius: 50px;
    padding: 0.7rem 0rem 0.7rem 1.2rem;
    margin-right: 1rem;

    @media (min-width: 768px) {
        padding: 0.7rem 0rem 0.7rem 1.2rem;
    }
`




export const Label = styled.label`
    font-weight: var(--fw-medium);
    margin: 0 0.3rem 0.1rem;
`




export const TextInput = styled.input`
    width: 50px;
    background: transparent;
    outline: none;
    border: none;
    font-weight: var(--fw-bold);
    color: var(--header-text-color);
`




export const SubmitBtn = styled.input`
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