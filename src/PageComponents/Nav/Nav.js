import React, { useState, useEffect, useRef } from 'react';
import { NavWrapper, PageLogo, MobileOpenMenu, MobileCloseMenu, NavMenuContainer, NavMenu, NavLink, NavLinkPopUp } from "./NavStyle";

// Redux.
import { useDispatch } from 'react-redux';
import { createNewPledgeWithoutThanks, showProjectImages } from "../../Features/pledgeSlice";




function Nav() {
    // Redux.
    const dispatch = useDispatch();

    // Local state.
    const [ mobileMenuOpened, setMobileMenuOpened ] = useState(false);
    const mobileMenuRef = useRef();


    // Open mobile menu.
    const openMenu = () => {
        setMobileMenuOpened(true);
    };


    // Close mobile menu.
    const closeMenu = () => {
        setMobileMenuOpened(false);
    };


    // Display images popUp.
    const displayImagesPopUp = () => {
        setMobileMenuOpened(false);
        dispatch(showProjectImages());
    }


    // Link click close menu.
    const closeMobileMenuOnLinkClick = () => {
        setMobileMenuOpened(false);
    };


    // Close mobile menu on outside click.
    useEffect(() => {
        let closeOutsideClick = (event) => {
            if (mobileMenuOpened && !mobileMenuRef.current.contains(event.target)) {
                setMobileMenuOpened(false);
            }
        };

        document.addEventListener("click", closeOutsideClick);

        return () => {
            document.removeEventListener("click", closeOutsideClick);
        }
    });


    // On Discover link click.
    const startNewPledge = () => {
        dispatch(createNewPledgeWithoutThanks());
        setMobileMenuOpened(false);
    }





    
    return (
        <NavWrapper>
            <PageLogo src="./images/logo.svg" alt="Logo" />
            <MobileOpenMenu isVisible={mobileMenuOpened} onClick={openMenu} src="./images/icon-hamburger.svg" alt="Open Menu" />
            <MobileCloseMenu isVisible={mobileMenuOpened} onClick={closeMenu} src="./images/icon-close-menu.svg" alt="Close Menu" />
            <NavMenuContainer isVisible={mobileMenuOpened}>
                <NavMenu isVisible={mobileMenuOpened} ref={mobileMenuRef}>
                    <NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={closeMobileMenuOnLinkClick}>About</NavLink>
                    <NavLink to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={closeMobileMenuOnLinkClick}>Discover</NavLink>
                    <NavLinkPopUp onClick={startNewPledge}>Get Started</NavLinkPopUp>                  
                    <NavLinkPopUp onClick={displayImagesPopUp}>See Project</NavLinkPopUp>                  
                </NavMenu>
            </NavMenuContainer>    
        </NavWrapper>
    )
}

export default Nav;