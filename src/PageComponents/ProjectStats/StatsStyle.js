import styled from "styled-components";






export const StatsContainer = styled.div`
    background-color: var(--card-bg-color);
    margin: 2rem 0;
    padding: 2rem 1.5rem;
    box-shadow: var(--card-box-shadow);
    border: 1px solid var(--card-border-color);
    border-radius: var(--card-border-radius);
    animation: statsCard 0.5s ease-in-out;

    @media (min-width: 768px) {
        margin: 1.5rem 0;
        padding: 3rem 2rem;
    }
`




export const StatsNumbersContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    div {
        padding: 1.5rem 0 0;

        :after {
            content: "";
            display: block;
            width: 90px;
            height: 2px;
            margin: 1.8rem auto 0;
            background-color: var(--card-border-color);
            border-radius: 10px;
        }

        h2 {
            font-weight: var(--fw-bold);
            font-size: 30px;
            color: var(--header-text-color);
            margin-bottom: 0.8rem;
        }

        p {
            font-weight: var(--fw-medium);
            font-size: 16px;
        }

        :first-of-type {
            padding-top: 0;
        }

        :last-of-type {
            border-bottom: none;
            padding-bottom: 0;

            :after {
                content: none;
            }
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
        text-align: left;

        div {
            padding:  0 3.5rem;
            border-bottom: none;
            border-right: 2px solid var(--card-border-color);

            :after {
                content: none;
            }

            :first-of-type {
                padding-left: 0;
            }

            :last-of-type {
                padding-right: 0;
                border-right: none;
            }

            h2 {
                margin-bottom: 1rem;
            }
        }
    }
`




export const ProgressBar = styled.div`
    background-color: #ececec;
    width: 100%;
    height: 12px;
    border-radius: 10px;
    margin-top: 3rem;

    :after {
        content: "";
        background-color: var(--btn-bg-color);
        height: 12px;
        display: block;
        width: ${({totalProgressMade}) => (totalProgressMade ? `${totalProgressMade}%` : "0%")};
        max-width: 100%;
        border-radius: 10px;
        transition: all 1s ease-in-out;
    }
`