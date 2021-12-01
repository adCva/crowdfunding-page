import styled from "styled-components";





export const DescriptiveDisabledWrapper = styled.div`
    border: 2px solid var(--disabled-card-border-color);
    border-radius: 10px;
    padding: 1.5rem;
    user-select: none;

    margin-bottom: 2rem;
    :last-of-type {
        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        margin-bottom: 1.5rem;
    }
`




export const DisabledText = styled.div`
    display: flex;
    flex-direction: column;
    

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`




export const DisabledCardTitle = styled.h4`
    font-weight: var(--fw-medium);
    font-size: 17px;
    color: var(--disabled-header-text-color);
    margin-bottom: 0.6rem;

    @media (min-width: 360px) {
        font-size: 18px;
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
        font-size: 18px;
    }
`




export const DisabledCardPledge = styled.p`
    color: var(--disabled-btn-bg-color);
    font-weight: var(--fw-regular);
    font-size: 15px;

    @media (min-width: 360px) {
        font-size: 15.5px;
    }

    @media (min-width: 768px) {
        font-size: 16px;
    }
`




export const DisabledCardDescription = styled.p`
    color: var(--disabled-paragraph-text-color);
    font-weight: var(--fw-regular);
    font-size: 14px;
    margin: 1rem 0;
    line-height: 1.4;

    @media (min-width: 360px) {
        margin: 1.5rem 0;
    }

    @media (min-width: 768px) {
        margin: 2rem 0;
        line-height: 1.5;
        font-size: 16px;
    }
`




export const DisabledInteractive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`




export const DisabledDescriptiveDeadline = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    @media (min-width: 360px) {
        margin-bottom: 2rem;
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`




export const DisabledDeadlineDays = styled.h3`
    font-weight: var(--fw-medium);
    font-size: 25px;
    color: var(--disabled-header-text-color);
    margin-right: 0.35rem;

    @media (min-width: 768px) {
        font-size: 28px;
    }
`




export const DisabledDeadlineUnit = styled.p`
    color: var(--disabled-paragraph-text-color);
    font-weight: var(--fw-medium);
    font-size: 15px;
`




export const DisabledDeadlineButton = styled.button`
    border: none;
    border-radius: 50px;
    outline: none;
    background-color: var(--disabled-paragraph-text-color);
    color: var(--bg-color);
    font-weight: var(--fw-bold);
    letter-spacing: 0.8px;
    padding: 0.8rem 1.5rem;
`