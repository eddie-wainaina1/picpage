import Picture from "./Picture"; 
// import picAPI from "../resources/picAPI";
import { StateInterface,PictureProps } from "./interfaces";
import store from "../stateManagement/StateStore";
import { useEffect } from "react";
import { addPic,clickLabel,clickOutside,updateLabel } from "../stateManagement/actions";

import { connect } from "react-redux";

const LiContainer = (props:any)=> {
    const url = "https://jsonplaceholder.typicode.com/photos"
    useEffect(() => {
        (async()=>{
            console.log("Entering effect")
            let res = await fetch(url)
            let data = await res.json
            console.log(data);
        })();
    }, [])
    return(
        <div>
            {
                store.getState().data.length?store.getState().data.map((pic:PictureProps)=><li><Picture {...pic}/></li>)
                : <div> <strong>No Objects In State</strong> </div>
            }
        </div>
    )
}

function mapStateToProps(state:StateInterface){
    return {...state,data:[...state.data]}
}

function mapDispatchToProps(dispatch:Function){
    return {
        addPic: (pic:PictureProps)=>dispatch(addPic(pic)),
        clickLabel: (id:number)=>dispatch(clickLabel(id)),
        clickOutside : ()=>dispatch(clickOutside()),
        updateLabel : (id:number,newTitle:string)=>dispatch(updateLabel(id,newTitle))
    }
}

export const ListContainer = connect(mapStateToProps,mapDispatchToProps)(LiContainer)
