import React from 'react';
import { DisabledInteractiveWrapper, DisabledInteractiveCardDescription, DisabledMobileSelectBtnContainer, DisabledMobileBtnAndTitle, DisabledMobileInteractiveTitleContainer, DisabledMobileTitle, DisabledMobileInitialValue, DisabledSelectBtnContainer, DisabledInteractiveCardDetails, DisabledInteractiveShortDetails, DisabledInteractiveTitleContainer, Disableditle, DisabledInitialValue, DisabledInteractiveDeadline, DisabledInteractiveDays, DisabledInteractiveUnit, DisabledCardDescription, DisabledMobileInteractiveDeadline, DisabledMobileInteractiveDays, DisabledMobileInteractiveUnit} from "./DisabledStyle";



function Disabled(props) {
    return (
        <DisabledInteractiveWrapper>
            <DisabledInteractiveCardDescription>

                {/* ====================================== Only for mobile components ====================================== */}
                <DisabledMobileBtnAndTitle>
                    <DisabledMobileSelectBtnContainer></DisabledMobileSelectBtnContainer>
                    <DisabledMobileInteractiveTitleContainer>
                        <DisabledMobileTitle>{props.cardTitle}</DisabledMobileTitle>
                        <DisabledMobileInitialValue>{props.cardValue}</DisabledMobileInitialValue>
                    </DisabledMobileInteractiveTitleContainer>
                </DisabledMobileBtnAndTitle>

                {/* ====================================== General & desktop components ====================================== */}
                <DisabledSelectBtnContainer></DisabledSelectBtnContainer>
                <DisabledInteractiveCardDetails>
                    <DisabledInteractiveShortDetails>
                        <DisabledInteractiveTitleContainer>
                            <Disableditle>{props.cardTitle}</Disableditle>
                            <DisabledInitialValue>{props.cardValue}</DisabledInitialValue>
                        </DisabledInteractiveTitleContainer>
                        <DisabledInteractiveDeadline>
                            <DisabledInteractiveDays>{props.daysLeft}</DisabledInteractiveDays>
                            <DisabledInteractiveUnit>left</DisabledInteractiveUnit>
                        </DisabledInteractiveDeadline>
                    </DisabledInteractiveShortDetails>
                    <DisabledCardDescription>{props.cardDesc}</DisabledCardDescription>

                    {/* ====================================== Only for mobile component ====================================== */}
                    <DisabledMobileInteractiveDeadline>
                        <DisabledMobileInteractiveDays>{props.daysLeft}</DisabledMobileInteractiveDays>
                        <DisabledMobileInteractiveUnit>left</DisabledMobileInteractiveUnit>
                    </DisabledMobileInteractiveDeadline>

                </DisabledInteractiveCardDetails>
            </DisabledInteractiveCardDescription>
        </DisabledInteractiveWrapper>
    )
}

export default Disabled;