import { ADD_PIC, ADD_PICS, CLICK_LABEL,CLICK_OUTSIDE,UPDATE_LABEL } from "./actions"
import { cloneDeep } from "lodash"
import { PictureInterface, StateInterface } from "../components/interfaces"

export function clickReducer(state:StateInterface={selectedId:null,data:[]}, action:any){
    let settingState = cloneDeep(state)
    switch(action.type){
        case CLICK_LABEL:
            return {...state, selectedId:action.payload.id}

        case CLICK_OUTSIDE:
            return {...state, selectedId:null}

        case UPDATE_LABEL:
            let st = settingState.data.filter((pic:PictureInterface)=>pic.id===action.payload.id)
            let rest1 = settingState.data.slice(0,action.payload.id)
            let rest2 = settingState.data.slice(action.payload.id+1)
            st[0].title = action.payload.newTitle
            rest1.push(st[0])
            return({...settingState,data:[...rest1,...rest2]})

        case ADD_PIC:
            return {...settingState,data:[...settingState.data,action.payload.pic]}
        
        case ADD_PICS:
            return {...settingState,data:[...settingState.data,...action.payload.pics]}
            
        default:
            return state
    }
}
