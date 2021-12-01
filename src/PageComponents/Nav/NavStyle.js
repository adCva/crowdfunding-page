import styled from "styled-components";





export const NavWrapper = styled.nav`
    width: min(90%, 1450px);
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;

    @media (min-width: 768px) {
        padding: 2rem 0;
    }
`




export const PageLogo = styled.img`
    z-index: 999;
    animation: mobileMenu 0.35s ease-in-out;
`




export const MobileOpenMenu = styled.img`
    display: ${({isVisible}) => (isVisible ? "none" : "inline-block")};

    @media (min-width: 768px) {
        display: none;
    }
`




export const MobileCloseMenu = styled.img`
    display: ${({isVisible}) => (isVisible ? "inline-block" : "none")};
    z-index: 9999;
    position: fixed;
    right: 20px;

    @media (orientation: landscape) {
        right: 45px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`




export const NavMenuContainer = styled.div`
    display: ${({isVisible}) => (isVisible ? "flex" : "none")};
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    animation: mobileMenu 0.35s ease-in-out;
    z-index: 999;


    @media (min-width: 768px) {
        display: inline-block;
        position: initial;
        background-color: transparent;
    }
`




export const NavMenu = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin-top: 7rem;
    border-radius: 10px;

    @media (orientation: landscape) {
        margin-top: 5rem;
    }

    @media (min-width: 768px) {
        width: auto;
        flex-direction: row;
        background-color: transparent;
        margin-top: 0;
        border-radius: none;
    }
`




export const NavLink = styled.a`
    color: var(--header-text-color);
    font-weight: var(--fw-bold);
    font-size: 17px;
    padding: 1.6rem 1.5rem;
    border-bottom: 1px solid var(--card-border-color);
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    :last-of-type {
        border-bottom: none; 
    }

    :hover {
        transform: translateY(-3px);
    }

    :focus {
        transform: translateY(-3px);
    }

    @media (min-width: 768px) {
        color: #ffffff;
        padding: 0;
        border-bottom: none;
        margin-right: 2rem;

        :last-of-type {
            margin-right: 0;
        }
    }
`