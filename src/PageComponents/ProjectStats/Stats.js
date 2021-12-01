import React from 'react';
import { StatsContainer, StatsNumbersContainer, ProgressBar } from "./StatsStyle";

// Redux.
import { useSelector } from 'react-redux';


function Stats() {
    // Redux state.
    const totalFunds = useSelector((state) => state.pledge.totalFunds);
    const totalBackers = useSelector((state) => state.pledge.totalBackers);
    const totalProgress = useSelector((state) => state.pledge.totalProgress);


    return (
        <StatsContainer>
            <StatsNumbersContainer>
                <div>
                    <h2>${totalFunds.toLocaleString("en-US")}</h2>
                    <p>of $100,000 backed</p>
                </div>
                <div>
                    <h2>{totalBackers.toLocaleString("en-US")}</h2>
                    <p>total backers</p>
                </div>
                <div>
                    <h2>56</h2>
                    <p>days left</p>
                </div>
            </StatsNumbersContainer>
            <ProgressBar totalProgressMade={totalProgress}></ProgressBar>
        </StatsContainer>
    )
}

export default Stats;