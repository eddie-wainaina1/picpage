import { PictureProps } from "../components/interfaces";

export const CLICK_LABEL = "clickLabel";
export const CLICK_OUTSIDE = "clickOutside";
export const UPDATE_LABEL = "updateLabel";
export const ADD_PIC = "addPic";

////////////////////////////////////////////
//Action creators
export const addPic = (pic:PictureProps)=> ({
    type: ADD_PIC,
    payload: {
        pic
    }
})
export const clickLabel = (id)=> ({
    type: CLICK_LABEL,
    payload: {
        id
    }
})

export const clickOutside = ()=> ({
    type: CLICK_OUTSIDE
})

export const updateLabel = (id,newTitle)=> ({
    type: UPDATE_LABEL,
    payload: {
        id,newTitle
    }
})