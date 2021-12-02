import styled from "styled-components";



export const TitleContainer = styled.section`
    text-align: center;
    animation: titleCard 0.3s ease-in-out;
`




export const TitleLogo = styled.img`
    margin-bottom: -1.8rem;

    @media (min-width: 768px) {
        height: 60px;
    }
`




export const TitleText = styled.div`
    background-color: var(--card-bg-color);
    padding: 3rem 2rem 1.5rem;
    box-shadow: var(--card-box-shadow);
    border: 1px solid var(--card-border-color);
    border-radius: var(--card-border-radius);

    @media (min-width: 768px) {
        padding: 3.5rem 2rem 2.5rem;
    }
`




export const TextH1 = styled.h1`
    font-weight: var(--fw-bold);
    font-size: 22px;
    line-height: 1.2;
    color: var(--header-text-color);

    @media (min-width: 768px) {
        font-size: 25px;
    }
` 




export const TextParagraph = styled.p`
    font-weight: var(--fw-medium);
    font-size: 14px;
    line-height: 1.5;
    margin: 1.2rem 0 2rem;

    @media (min-width: 768px) {
        font-size: 16px;
        margin: 1rem 0 2.5rem;
    }
` 




export const TitleInteractiveContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`




export const TitleButton = styled.button`
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

    @media (min-width: 360px) {
        padding: 1.15rem 2.5rem;
    }
`




export const TitleBookmark = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ececec;
    color: ${({isBookmarked}) => (isBookmarked ? "var(--btn-bg-hover-color)": "var(--paragraph-text-color)")};
    font-weight: var(--fw-bold);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    :hover {
        background-color: var(--disabled-paragraph-text-color);
    }


    @media (min-width: 768px) {
        padding-right: 1rem;
    }
`




export const BookmarkImg = styled.img`
    height: 50px;

    @media (min-width: 768px) {
        margin-right: 0.5rem;
    }
`




export const BookmarkParagraph = styled.p`
    display: none;
    margin: 0;
    font-size: 16px;

    @media (min-width: 768px) {
        display: inline-block;
    }
`