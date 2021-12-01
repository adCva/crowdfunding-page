import styled from "styled-components";





export const DescriptiveWrapper = styled.div`
    border: 2px solid var(--card-border-color);
    border-radius: 10px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    :last-of-type {
        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        margin-bottom: 1.5rem;
    }
`




export const Text = styled.div`
    display: flex;
    flex-direction: column;
    

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`




export const CardTitle = styled.h4`
    font-weight: var(--fw-bold);
    font-size: 17px;
    color: var(--header-text-color);
    margin-bottom: 0.6rem;

    @media (min-width: 360px) {
        font-size: 18px;
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`




export const CardPledge = styled.p`
    color: var(--btn-bg-color);
    font-weight: var(--fw-medium);
    font-size: 15px;

    @media (min-width: 360px) {
        font-size: 15.5px;
    }

    @media (min-width: 768px) {
        font-size: 16px;
    }
`




export const CardDescription = styled.p`
    font-weight: var(--fw-medium);
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




export const Interactive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`




export const DescriptiveDeadline = styled.div`
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




export const DeadlineDays = styled.h3`
    font-weight: var(--fw-bold);
    font-size: 25px;
    color: var(--header-text-color);
    margin-right: 0.35rem;

    @media (min-width: 768px) {
        font-size: 28px;
    }
`




export const DeadlineUnit = styled.p`
    font-weight: var(--fw-medium);
    font-size: 15px;
`




export const DeadlineButton = styled.button`
    border: none;
    border-radius: 50px;
    outline: none;
    background-color: var(--btn-bg-color);
    color: var(--bg-color);
    font-weight: var(--fw-bold);
    letter-spacing: 0.8px;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    
    :hover {
        background-color: var(--btn-bg-hover-color);
    }

    :focus {
        background-color: var(--btn-bg-hover-color);
    }
`