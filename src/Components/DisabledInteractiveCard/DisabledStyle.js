import styled from "styled-components";





export const DisabledInteractiveWrapper = styled.div`
    border: 2px solid var(--disabled-card-border-color);
    border-radius: var(--card-border-radius);
    margin-bottom: 2rem;
    user-select: none;

    :last-of-type {
            margin-bottom: 0;
    }

    @media (min-width: 768px) {
        margin-bottom: 1.5rem;
    }
`




export const DisabledInteractiveCardDescription = styled.div`
    padding: 2rem 1.5rem 1.5rem;

    @media (min-width: 768px) {
        display: flex;
        align-items: flex-start;
    }
`




export const DisabledMobileBtnAndTitle = styled.div`
    display: flex;
    align-items: center;


    @media (min-width: 768px) {
        display: none;
    }
`




export const DisabledMobileSelectBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--card-border-color);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 1rem;
`




export const DisabledMobileInteractiveTitleContainer = styled.div``




export const DisabledMobileTitle = styled.h4`
    font-weight: var(--fw-bold);
    color: var(--disabled-header-text-color);
    margin-bottom: 0.4rem;
`




export const DisabledMobileInitialValue = styled.p`
    font-size: 15px;
    color: var(--disabled-btn-bg-color);
`




export const DisabledSelectBtnContainer = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--card-border-color);
    border-radius: 50%;
    margin-right: 1rem;
    padding: 0.55rem;

    @media (min-width: 768px) {
        display: flex;
    }
`




export const DisabledInteractiveCardDetails = styled.div``




export const DisabledInteractiveShortDetails = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`




export const DisabledInteractiveTitleContainer = styled.div`
    display: flex;
    align-items: center;
`




export const Disableditle = styled.h4`
    font-weight: var(--fw-bold);
    font-size: 19px;
    color: var(--disabled-header-text-color);
    margin-right: 0.8rem;
`




export const DisabledInitialValue = styled.p`
    font-weight: var(--fw-medium);
    font-size: 16px;
    color: var(--disabled-btn-bg-color);
`




export const DisabledInteractiveDeadline = styled.div`
    display: flex;
    align-items: center;
`




export const DisabledInteractiveDays = styled.h3`
    font-weight: var(--fw-bold);
    font-size: 22px;
    color: var(--disabled-header-text-color);
    margin-right: 0.35rem;
`




export const DisabledInteractiveUnit = styled.p`
    color: var(--disabled-paragraph-text-color);
    font-weight: var(--fw-medium);
    font-size: 15px;
`





export const DisabledCardDescription = styled.p`
    font-weight: var(--fw-medium);
    color: var(--disabled-paragraph-text-color);
    font-size: 14px;
    margin: 1rem 0;
    line-height: 1.4;

    @media (min-width: 768px) {
        line-height: 1.5;
        font-size: 16px;
    }
`




export const DisabledMobileInteractiveDeadline = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        display: none;
    }
`



export const DisabledMobileInteractiveDays = styled.h3`
    font-weight: var(--fw-bold);
    font-size: 22px;
    color: var(--disabled-header-text-color);
    margin-right: 0.35rem;
`




export const DisabledMobileInteractiveUnit = styled.p`
    color: var(--disabled-paragraph-text-color);
    font-weight: var(--fw-medium);
    font-size: 15px;
`