import * as counter from "./constanta/constanta";

export const getPlus = (value) => {
    return {
        type: counter.userPlus,
        value: value
    }
}


export const getMinus = (value) => {
    return {
        type: counter.userMinus,
        value: value
    }
}

export const getMinusCek = (value) => {
    return (dispatch, useState) => {
        if (useState().items.users > 0) {
            dispatch(getMinus(value))
        }
    }
}