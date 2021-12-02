import React, { useState } from 'react';
import { InteractiveWrapper, InteractiveCardDescription, MobileSelectBtnContainer, MobileBtnAndTitle, MobileSelectBtn, MobileInteractiveTitleContainer, MobileTitle, MobileInitialValue, SelectBtnContainer, SelectButton, InteractiveCardDetails, InteractiveShortDetails, InteractiveTitleContainer, Title, InitialValue, InteractiveDeadline, InteractiveDays, InteractiveUnit, CardDescription, MobileInteractiveDeadline, MobileInteractiveDays, MobileInteractiveUnit, CardInteraction, CardPledge, CardForm, FormGroup, Label, TextInput, SubmitBtn } from "./InteractiveStyle";

// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { selectPledgePackage, backProject } from "../../Features/pledgeSlice";



function Interactive(props) {
    // Redux state.
    const pledgePackage = useSelector((state) => state.pledge.pledgePackage);
    const dispatch = useDispatch();

    // Local state.
    const pledgeInitialValue = props.numValue;
    const [ pledgeInteractiveValue, setPledgeInteractiveValue ] = useState(props.numValue); 


    // Open div (show enter pledge form).
    const changeShowForm = () => {
        dispatch(selectPledgePackage({package: props.pledgeName}));
    }


    // Change pledge form value handler.
    const changeHandler = (event) => {
        setPledgeInteractiveValue(event.target.value);
    }



    // Continue with pledge (form submit).
    const submitBtn = (event) => {
        event.preventDefault();

        if (Number(pledgeInteractiveValue) < Number(pledgeInitialValue)) {
            alert(`C'mon man (in Joe Biden's voice.). The package value can't be lower than ${pledgeInitialValue}`);
        } else if (Number(pledgeInteractiveValue) < 1) {
            alert("C'mon man (in Joe Biden's voice.). The value can't be lower than 1.");
        } else {
            dispatch(backProject({depositAmout: pledgeInteractiveValue}));
        } 
    }




    
    return (
        <InteractiveWrapper onClick={changeShowForm} isPayedPledgeActive={pledgePackage === props.pledgeName ? true : false}>
            <InteractiveCardDescription>

                {/* ====================================== Only for mobile components ====================================== */}
                <MobileBtnAndTitle>
                    <MobileSelectBtnContainer>
                        <MobileSelectBtn isPayedPledgeActive={pledgePackage === props.pledgeName ? true : false}></MobileSelectBtn>
                    </MobileSelectBtnContainer>
                    <MobileInteractiveTitleContainer>
                        <MobileTitle>{props.cardTitle}</MobileTitle>
                        <MobileInitialValue>{props.cardValue}</MobileInitialValue>
                    </MobileInteractiveTitleContainer>
                </MobileBtnAndTitle>

                {/* ====================================== General & desktop components ====================================== */}
                <SelectBtnContainer>
                    <SelectButton isPayedPledgeActive={pledgePackage === props.pledgeName ? true : false}></SelectButton>
                </SelectBtnContainer>
                <InteractiveCardDetails>
                    <InteractiveShortDetails>
                        <InteractiveTitleContainer>
                            <Title>{props.cardTitle}</Title>
                            <InitialValue>{props.cardValue}</InitialValue>
                        </InteractiveTitleContainer>
                        <InteractiveDeadline>
                            <InteractiveDays>{props.daysLeft}</InteractiveDays>
                            <InteractiveUnit>left</InteractiveUnit>
                        </InteractiveDeadline>
                    </InteractiveShortDetails>
                    <CardDescription>{props.cardDesc}</CardDescription>

                    {/* ====================================== Only for mobile component ====================================== */}
                    <MobileInteractiveDeadline>
                        <MobileInteractiveDays>{props.daysLeft}</MobileInteractiveDays>
                        <MobileInteractiveUnit>left</MobileInteractiveUnit>
                    </MobileInteractiveDeadline>

                </InteractiveCardDetails>
            </InteractiveCardDescription>
            <CardInteraction showDiv={pledgePackage === props.pledgeName ? true : false}>
                <CardPledge>Enter your pledge</CardPledge>
                <CardForm onSubmit={submitBtn}>
                    <FormGroup>
                        <Label>$</Label>
                        <TextInput type="number" name="pledgeValue" value={pledgeInteractiveValue} onChange={changeHandler} />
                    </FormGroup>
                    <SubmitBtn type="submit" value="Continue"/>
                </CardForm>
            </CardInteraction>
        </InteractiveWrapper>
    )
}

export default Interactive;