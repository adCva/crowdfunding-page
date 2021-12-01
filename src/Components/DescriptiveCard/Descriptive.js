import React from 'react';
import { DescriptiveWrapper, Text, CardTitle, CardPledge, CardDescription, Interactive, DescriptiveDeadline, DeadlineDays, DeadlineUnit, DeadlineButton } from "./DescriptiveStyle";
import { DescriptiveDisabledWrapper, DisabledText, DisabledCardTitle, DisabledCardPledge, DisabledCardDescription, DisabledInteractive, DisabledDescriptiveDeadline, DisabledDeadlineDays, DisabledDeadlineUnit, DisabledDeadlineButton } from "./DescriptiveDisabledStyle";

// Redux.
import { useDispatch } from 'react-redux';
import { createPledgeFromDescriptive } from "../../Features/pledgeSlice";



function Descriptive(props) {
    // Redux.
    const dispatch = useDispatch();

    // Start new pledge.
    const selectPledgePackage = () => {
        dispatch(createPledgeFromDescriptive({package: props.packageName}));
    }





    return (
        props.isDisabled ? (
            /* ============================= Disabled Card ============================= */
            <DescriptiveDisabledWrapper>
                <DisabledText>
                    <DisabledCardTitle>{props.cardTitle}</DisabledCardTitle>
                    <DisabledCardPledge>{props.cardValue}</DisabledCardPledge>
                </DisabledText>
                <DisabledCardDescription>{props.cardDesc}</DisabledCardDescription>
                <DisabledInteractive>
                    <DisabledDescriptiveDeadline>
                        <DisabledDeadlineDays>{props.daysLeft}</DisabledDeadlineDays>
                        <DisabledDeadlineUnit>left</DisabledDeadlineUnit>
                    </DisabledDescriptiveDeadline>
                    <DisabledDeadlineButton>Select Reward</DisabledDeadlineButton>
                </DisabledInteractive>
            </DescriptiveDisabledWrapper>
        ) :(
            /* ============================= Active Card ============================= */
            <DescriptiveWrapper>
                <Text>
                    <CardTitle>{props.cardTitle}</CardTitle>
                    <CardPledge>{props.cardValue}</CardPledge>
                </Text>
                <CardDescription>{props.cardDesc}</CardDescription>
                <Interactive>
                    <DescriptiveDeadline>
                        <DeadlineDays>{props.daysLeft}</DeadlineDays>
                        <DeadlineUnit>left</DeadlineUnit>
                    </DescriptiveDeadline>
                    <DeadlineButton onClick={selectPledgePackage}>Select Reward</DeadlineButton>
                </Interactive>
            </DescriptiveWrapper>
        )
    )
}

export default Descriptive;