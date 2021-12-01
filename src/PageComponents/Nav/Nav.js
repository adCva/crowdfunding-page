import React, { useState, useEffect, useRef } from 'react';
import { NavWrapper, PageLogo, MobileOpenMenu, MobileCloseMenu, NavMenuContainer, NavMenu, NavLink } from "./NavStyle";

// Redux.
import { useDispatch } from 'react-redux';
import { showProjectImages } from "../../Features/pledgeSlice";


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
        dispatch(showProjectImages());
    }


    // Link click message.
    const messageClick = () => {
        alert("This link does nothing.");
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




    
    return (
        <NavWrapper>
            <PageLogo src="./images/logo.svg" alt="Logo" />
            <MobileOpenMenu isVisible={mobileMenuOpened} onClick={openMenu} src="./images/icon-hamburger.svg" alt="Open Menu" />
            <MobileCloseMenu isVisible={mobileMenuOpened} onClick={closeMenu} src="./images/icon-close-menu.svg" alt="Close Menu" />
            <NavMenuContainer isVisible={mobileMenuOpened}>
                <NavMenu isVisible={mobileMenuOpened} ref={mobileMenuRef}>
                    <NavLink onClick={() => messageClick()}>About</NavLink>
                    <NavLink onClick={() => messageClick()}>Discover</NavLink>
                    <NavLink onClick={() => messageClick()}>Get Started</NavLink>                  
                    <NavLink onClick={()=> displayImagesPopUp()}>See Project</NavLink>                  
                </NavMenu>
            </NavMenuContainer>    
        </NavWrapper>
    )
}

export default Nav;