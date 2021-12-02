import { createSlice } from '@reduxjs/toolkit';


export const pledgeSlice = createSlice({
    name: "pledge",
    initialState: {
        openPledge: false,
        thanksMessage: true,
        pledgePackage: "",
        totalFunds: 89914,
        totalBackers: 5007,
        totalProgress: 89,
        displayImagesPopUp: false
    },


    reducers: {
        createNewPledge: (state) => {
            state.openPledge = true
        },

        createNewPledgeWithoutThanks: (state) => {
            return {
                ...state,
                openPledge: true,
                thanksMessage: false,
            }
        },

        createPledgeFromDescriptive: (state, action) => {
            let selectedPledge = action.payload.package;

            return {
                ...state,
                openPledge: true,
                pledgePackage: selectedPledge
            }
        },

        getOverThanksMessage: (state) => {
            state.thanksMessage = false
        },

        closePledge: (state) => {
            return {
                ...state, 
                openPledge: false,
                thanksMessage: true,
                pledgePackage: ""
            }
        },

        selectPledgePackage: (state, action) => {
            state.pledgePackage = action.payload.package
        },

        backProject: (state, action) => {
            let newTotalFunds = Number(state.totalFunds) + Number(action.payload.depositAmout);
            let newTotalBacker = state.totalBackers + 1;
            let newTotalProgress = (100 * newTotalFunds) / 100000;

            return {
                ...state,
                openPledge: false,
                thanksMessage: true,
                totalFunds: newTotalFunds,
                totalBackers: newTotalBacker,
                totalProgress: newTotalProgress,
                pledgePackage: ""
            }
        },


        backProjectFree: (state) => {
            let newTotalBackerFree = state.totalBackers + 1;

            return {
                ...state,
                openPledge: false,
                thanksMessage: true,
                totalBackers: newTotalBackerFree,
                pledgePackage: ""
            }
        },

        showProjectImages: (state) => {
            state.displayImagesPopUp = true;
        },

        hideProjectImages: (state) => {
            state.displayImagesPopUp = false;
        }
    }
})


export const { createNewPledge, createNewPledgeWithoutThanks, createPledgeFromDescriptive, getOverThanksMessage, closePledge, selectPledgePackage, backProject, backProjectFree, showProjectImages, hideProjectImages } = pledgeSlice.actions;

export default pledgeSlice.reducer;