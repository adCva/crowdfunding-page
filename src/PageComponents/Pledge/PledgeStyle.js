import styled from "styled-components";





export const PledgeWrapper = styled.section`
    display: ${({displayElement}) => (displayElement ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
`




export const PledgeOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--card-bg-color);
    width: min(90%, 700px);
    padding: 2rem 1.5rem;
    border-radius: var(--card-border-radius);
    height: 90vh;
    overflow-y: scroll !important;

    // Hide scrollbar.
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }

    animation: pledgeCard 0.3s ease-in-out;

    @media (min-width: 768px) {
        padding: 2rem;
    }
`




export const OptionsTitleButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.7rem;

    @media (min-width: 768px) {
        margin-bottom: 1.2rem;
    }
`




export const ClosePledgeButton = styled.img`
    height: 17px;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    @media (min-width: 768px) {
        margin: -1rem -0.8rem 0 0;
    }
`




export const OptionsTitle = styled.h2`
    color: var(--header-text-color);
    font-weight: var(--fw-bold);
    font-size: 20px;

    @media (min-width: 768px) {
        font-size: 22px;
    }
`




export const OptionsParagraph = styled.p`
    margin-bottom: 1.7rem;
    font-weight: var(--fw-medium);
    font-size: 14px;
    line-height: 1.5;

    @media (min-width: 768px) {
        font-size: 16px;
        margin-bottom: 1.2rem;
    }
`