import { Button, ClickAwayListener, TextField, Tooltip } from "@mui/material";
import React, {useState} from "react";
import styled from "styled-components";
import { PictureInterface } from "./interfaces";
import DOMPurify from "dompurify";

const Div = styled.div`
    margin: 3px;
    border-radius: 10px;
    background-color: ${(props:any)=>parseInt(props.id)%2===0?"#D3D3D3":"white"};
    color: ${(props:any)=>parseInt(props.id)%2===0 && "white"};
`
const Label = styled.div`
    margin: 2px;
    border-radius: 5px;
    border: solid 1px;
`

export interface PictureProps{
    pic: PictureInterface
    updateLabel: (id:number,title:string)=>void
}

export default function Picture(props:PictureProps){
    const [isLabelFocused,setIsLabelFocused] = useState<boolean>(false)
    const handleLabelClick = (e:React.MouseEvent<HTMLElement>)=>{
        let div = e.target as HTMLElement;
        div.setAttribute('style','border');
        setIsLabelFocused(true);
    }
    const handleSave = ()=>{
        let label = document.getElementById(props.pic.id + "Label") as HTMLInputElement;
        let textContent:string = label.value;
        textContent = textContent.trim();
        //sanitize
        textContent = DOMPurify.sanitize(textContent);
        console.log(`saving ${textContent} to store`);
        //dispatch text content to store
        props.updateLabel(props.pic.id,textContent);
        setIsLabelFocused(false);
    }
    const handleClickAway = ()=>{
        setIsLabelFocused(false);
    }
    return(
        <Div id = {props.pic.id.toString()} className="Picture">
            <img src={props.pic.thumbnailUrl} alt=""></img>
            {isLabelFocused?
                <ClickAwayListener onClickAway={handleClickAway}>
                <>
                <TextField variant="outlined" id={props.pic.id + "Label"} className="Label" defaultValue={props.pic.title}/>
                <Button variant="contained" onClick={handleSave}>Save</Button>
                </>
                </ClickAwayListener>:
                <Tooltip title="Double Click To Edit" arrow>
                    <Label id={props.pic.id + "Label"} className="Label" onClick={handleLabelClick}>
                        {props.pic.title}
                    </Label>
                </Tooltip>}
            <div>{Date.now()}</div>
        </Div>
    )  
}

