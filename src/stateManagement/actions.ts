import { PictureInterface } from "../components/interfaces";

export const CLICK_LABEL = "clickLabel";
export const CLICK_OUTSIDE = "clickOutside";
export const UPDATE_LABEL = "updateLabel";
export const ADD_PIC = "addPic";
export const ADD_PICS = "addPics";

////////////////////////////////////////////
//Action creators
export const addPic = (pic:PictureInterface)=> ({
    type: ADD_PIC,
    payload: {
        pic
    }
});
export const addPics = (pics:PictureInterface[])=>({
    type: ADD_PICS,
    payload: {
        pics
    }
})
export const clickLabel = (id:number)=> ({
    type: CLICK_LABEL,
    payload: {
        id
    }
})

export const clickOutside = ()=> ({
    type: CLICK_OUTSIDE
})

export const updateLabel = (id:number,newTitle:string)=> ({
    type: UPDATE_LABEL,
    payload: {
        id,newTitle
    }
})