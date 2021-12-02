import React, { useState } from 'react';
import { TitleContainer, TitleLogo, TitleText, TextH1, TextParagraph, TitleInteractiveContainer, TitleButton, TitleBookmark, BookmarkImg, BookmarkParagraph } from "./TitleStyle";

// Redux.
import { useDispatch } from 'react-redux';
import { createNewPledge } from "../../Features/pledgeSlice";





function Title() {
    // Redux.
    const dispatch = useDispatch();

    // Local state.
    const [bookmarked, setBookmarked] = useState(false);

    // Bookmark the project.
    const bookmarkProjections = () => {
        setBookmarked(!bookmarked);
    };

    // Open pledge popUp.
    const startNewPledge = () => {
        dispatch(createNewPledge());
    }






    return (
        <TitleContainer id="discover">
            <TitleLogo src="./images/logo-mastercraft.svg" alt="Mastercraft Logo" />
            <TitleText>
                <TextH1>Mastercraft Bamboo Monitor Riser</TextH1>
                <TextParagraph>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</TextParagraph>
                <TitleInteractiveContainer>
                    <TitleButton onClick={startNewPledge}>Back this project</TitleButton>
                    <TitleBookmark isBookmarked={bookmarked} onClick={bookmarkProjections}>
                        <BookmarkImg src={bookmarked ? "./images/icon-bookmarked.png" : "./images/icon-bookmark.svg"}  alt="bookmark sign" />
                        <BookmarkParagraph>{bookmarked ? "Bookmarked" : "Bookmark" }</BookmarkParagraph>
                    </TitleBookmark>
                </TitleInteractiveContainer>
            </TitleText>
        </TitleContainer>
    )
}

export default Title
