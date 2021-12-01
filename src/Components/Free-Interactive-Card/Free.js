import React, { useRef } from 'react';
import { FreeWrapper, FreeCardDescription, FreeMobileBtnAndTitle, FreeMobileSelectBtnContainer, FreeMobileSelectBtn, FreeMobileTitle, FreeSelectBtnContainer, FreeSelectButton, FreeInteractiveCardDetails, FreeTitle, FreeCardDescriptionParagraph, FreeCardInteraction, FreeCardPledge, FreeSubmitBtn } from "./FreeStyle";

// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { selectPledgePackage, backProjectFree } from "../../Features/pledgeSlice";



function Free(props) {
    // Redux state.
    const pledgePackage = useSelector((state) => state.pledge.pledgePackage);
    const dispatch = useDispatch();


    const submitBtnRef = useRef();


    // Open div (show continue btn).
    const showBtn = (event) => {
        if (submitBtnRef.current.contains(event.target)) {
            // Without this the free card will be active on new --> Back this project <-- btn.
            return null
        } else {
            dispatch(selectPledgePackage({package: "free"}));
        }
    };



    // Continue with free pledge (submit btn).
    const submitBtn = () => {
        dispatch(backProjectFree());
    }






    return (
        <FreeWrapper onClick={showBtn} isPledgeActive={pledgePackage === "free" ? true : false}>
            <FreeCardDescription>

                {/* ====================================== Only for mobile components ====================================== */}
                <FreeMobileBtnAndTitle>
                    <FreeMobileSelectBtnContainer>
                        <FreeMobileSelectBtn isPledgeActive={pledgePackage === "free" ? true : false}></FreeMobileSelectBtn>
                    </FreeMobileSelectBtnContainer>
                    <FreeMobileTitle>{props.cardTitle}</FreeMobileTitle>
                </FreeMobileBtnAndTitle>

                {/* ====================================== General & desktop components ====================================== */}
                <FreeSelectBtnContainer>
                    <FreeSelectButton isPledgeActive={pledgePackage === "free" ? true : false}></FreeSelectButton>
                </FreeSelectBtnContainer>
                <FreeInteractiveCardDetails>
                    <FreeTitle>{props.cardTitle}</FreeTitle>
                    <FreeCardDescriptionParagraph>{props.cardDesc}</FreeCardDescriptionParagraph>
                </FreeInteractiveCardDetails>
            </FreeCardDescription>
            <FreeCardInteraction showDiv={pledgePackage === "free" ? true : false}>
                <FreeCardPledge>Show your support</FreeCardPledge>
                <FreeSubmitBtn onClick={submitBtn} ref={submitBtnRef}>Continue</FreeSubmitBtn>
            </FreeCardInteraction>
        </FreeWrapper>
    )
}

export default Free;