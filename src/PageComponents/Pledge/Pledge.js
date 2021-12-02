import React from 'react';
import { PledgeWrapper, PledgeOptionsContainer, OptionsTitleButton, ClosePledgeButton, OptionsTitle, OptionsParagraph } from "./PledgeStyle";
import Thanks from "../../Components/Thanks/Thanks";
import Free from '../../Components/Free-Interactive-Card/Free';
import Interactive from '../../Components/InteractiveCard/Interactive';
import Disabled from '../../Components/DisabledInteractiveCard/Disabled';

// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { closePledge } from "../../Features/pledgeSlice";





function Pledge() {
    // Redux state.
    const isPledgeContainerOpened = useSelector((state) => state.pledge.openPledge);
    const showThanksMessage = useSelector((state) => state.pledge.thanksMessage);
    const dispatch = useDispatch();

    // Close element.
    const closeWithoutPledge = () => {
        dispatch(closePledge());
    }



    return (
        <PledgeWrapper displayElement={isPledgeContainerOpened}>
            {showThanksMessage ? (
                <Thanks />
            ) : (
                <PledgeOptionsContainer>
                    <OptionsTitleButton>
                        <OptionsTitle>Back this project</OptionsTitle>
                        <ClosePledgeButton src="./images/icon-close-modal.svg" alt="Close Butoon" onClick={closeWithoutPledge} />
                    </OptionsTitleButton>
                    <OptionsParagraph>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</OptionsParagraph>
                    <Free cardTitle="Pledge with no reward" cardValue="0" daysLeft="0" cardDesc="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email." />
                    <Interactive cardTitle="Bamboo Stand" cardValue="Pledge $25 or more" numValue="25" daysLeft="101" cardDesc="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, andyou’ll be added to a special Backer member list." pledgeName="bamboo" />
                    <Interactive cardTitle="Black Edition Stand" cardValue="Pledge $75 or more" numValue="75" daysLeft="64" cardDesc="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included." pledgeName="blackEdition" />
                    <Disabled cardTitle="Mahogany Special Edition" cardValue="Pledge $200 or more" daysLeft="0" cardDesc="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included." />
                </PledgeOptionsContainer>
            )}
        </PledgeWrapper>
    )
}

export default Pledge;