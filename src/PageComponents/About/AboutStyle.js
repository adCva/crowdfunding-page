import styled from "styled-components";






export const AboutWrapper = styled.section`
    background-color: var(--card-bg-color);
    padding: 2rem 1.5rem;
    box-shadow: var(--card-box-shadow);
    border: 1px solid var(--card-border-color);
    border-radius: var(--card-border-radius);
    animation: aboutCard 0.6s ease-in-out;

    @media (min-width: 768px) {
        padding: 3rem 2rem;
    }
`




export const AboutSectionTitle = styled.h3`
    color: var(--header-text-color);
    font-weight: var(--fw-bold);
    font-size: 21px;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        margin-bottom: 1.5rem;
    }
`




export const AboutFirstParagraph = styled.p`
    font-size: 15px;
    margin-bottom: 1.5rem;
    line-height: 1.4;
`




export const AboutSecondParagraph = styled.p`
    font-size: 15px;
    margin-bottom: 2.5rem;
    line-height: 1.4;

    @media (min-width: 768px) {
        margin-bottom: 3.5rem;
    }
`