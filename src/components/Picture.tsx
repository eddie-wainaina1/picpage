import React from "react"
import styled from "styled-components"
const Div = styled.div`
    margin: 3px;
    border-radius: 10px;
    background-color: ${(props:any)=>parseInt(props.id)%2===0?"#D3D3D3":"white"};
    color: ${(props:any)=>parseInt(props.id)%2===0 && "white"};
`z

export default function Picture(props:any){

    return(
        <Div id = {props.pic.id.toString()} className="Picture">
            <img src={props.pic.thumbnailUrl} alt=""></img>
            <div id={props.pic.id + "Label"} className="Label" onClick={()=>{console.log("clicked")}}>{props.pic.title}</div>
            <div>{Date.now()}</div>
        </Div>
    )  
}

