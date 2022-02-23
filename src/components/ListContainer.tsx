import Picture from "./Picture"; 
// import picAPI from "../resources/picAPI";
import { CircularProgress } from "@mui/material"
import { StateInterface, PictureInterface } from "./interfaces";
import { addPic,addPics,clickLabel,clickOutside,updateLabel } from "../stateManagement/actions";

import { connect } from "react-redux";
import { useEffect, useState } from "react";

const LiContainer = (props:any)=> {
    const [arepicsLoading, setArePicsLoading] = useState(false);
    const addPics = props.addPics
    useEffect(()=>{
        setArePicsLoading(true);
        const url = "https://jsonplaceholder.typicode.com/photos";
        (async()=>{
            console.log("async fetch")
            const res = await fetch(url);
            const data = await res.json();
            setArePicsLoading(false);
            addPics(data.slice(0));
            console.log("done async fetch");
        })();

    },[addPics]);
    
    console.log(props);
    return(
        <div id="listContainer">
            {
                props.data.length && !arepicsLoading?
                props.data.map((pic:PictureInterface)=><Picture 
                    pic={pic} 
                    key={pic.id}
                    updateLabel = {props.updateLabel}/>)
                : <div style={{height:"1200px"}}> <CircularProgress color="inherit" className="Loading"/><br/>Loading Pictures... </div>
            }
        </div>
    )
}

function mapStateToProps(state:StateInterface){
    return {...state,data:[...state.data]}
}

function mapDispatchToProps(dispatch:Function){
    return {
        addPics: (pics:PictureInterface[])=>dispatch(addPics(pics)),
        addPic: (pic:PictureInterface)=>dispatch(addPic(pic)),
        clickLabel: (id:number)=>dispatch(clickLabel(id)),
        clickOutside : ()=>dispatch(clickOutside()),
        updateLabel : (id:number,newTitle:string)=>dispatch(updateLabel(id,newTitle))
    }
}

export const ListContainer = connect(mapStateToProps,mapDispatchToProps)(LiContainer)
