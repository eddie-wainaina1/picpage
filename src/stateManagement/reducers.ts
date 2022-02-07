import { ADD_PIC, CLICK_LABEL,CLICK_OUTSIDE,UPDATE_LABEL } from "./actions"
import { cloneDeep } from "lodash"
import { stateInterface } from "../components/interfaces"

export function clickReducer(state:stateInterface={selectedId:null,data:[]}, action){
    let settingState = cloneDeep(state)
    switch(action.type){
        case CLICK_LABEL:
            return {...state, selectedId:action.payload.id}

        case CLICK_OUTSIDE:
            return {...state, selectedId:null}

        case UPDATE_LABEL:
            let st = settingState.data.filter((pic)=>pic.id===action.payload.id)
            let rest1 = settingState.data.slice(0,action.payload.id)
            let rest2 = settingState.data.slice(action.payload.id+1)
            st.title = action.payload.newTitle
            rest1.push(st)
            return({...settingState,data:[...rest1,...rest2]})

        case ADD_PIC:
            return {...settingState,data:[...settingState.data,action.payload.pic]}

        default:
            return state
    }
}
