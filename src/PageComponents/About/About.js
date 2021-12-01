import React from 'react';
import Descriptive from '../../Components/DescriptiveCard/Descriptive';
import { AboutWrapper, AboutSectionTitle, AboutFirstParagraph, AboutSecondParagraph } from "./AboutStyle";




function About() {
    return (
        <AboutWrapper id="about">
            <AboutSectionTitle>About this project</AboutSectionTitle>
            <AboutFirstParagraph>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</AboutFirstParagraph>
            <AboutSecondParagraph>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</AboutSecondParagraph>
            <Descriptive isDisabled={false} cardTitle="Bamboo Stand" cardValue="Pledge $25 or more" cardDesc="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list." daysLeft="101" packageName="bamboo" />
            <Descriptive isDisabled={false} cardTitle="Black Edition Stand" cardValue="Pledge $75 or more" cardDesc="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included." daysLeft="64" packageName="blackEdition" />
            <Descriptive isDisabled={true} cardTitle="Mahogany Special Edition" cardValue="Pledge $200 or more" cardDesc="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included." daysLeft="0" />
        </AboutWrapper>
    )
}

export default About;