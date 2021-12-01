import React from 'react';
import { ThanksMessageContainer, MessageImg, MessageTitle, MessageParagraph, MessageButton } from "./ThanksStyle";

// Redux.
import { useDispatch } from 'react-redux';
import { getOverThanksMessage } from "../../Features/pledgeSlice";


function Thanks() {
    const dispatch = useDispatch();

    const closeThanksMessage = () => {
        dispatch(getOverThanksMessage());
    };





    return (
        <ThanksMessageContainer>
            <MessageImg src="./images/icon-check.svg" alt="Check" />
            <MessageTitle>Thanks for your support!</MessageTitle>
            <MessageParagraph>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will getan email once our campaign is completed.</MessageParagraph>
            <MessageButton onClick={closeThanksMessage}>Got it!</MessageButton>
        </ThanksMessageContainer>
    )
}

export default Thanks;