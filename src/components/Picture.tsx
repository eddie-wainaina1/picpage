import { Button, ClickAwayListener, TextField, Tooltip } from "@mui/material";
import DOMPurify from "dompurify";
import React, {useState} from "react";
import styled from "styled-components";
import { PictureInterface } from "./interfaces";

const Div = styled.div`
    margin: 3px;
    border-radius: 10px;
    background-color: ${(props:any)=>parseInt(props.id)%2===0?"#D3D3D3":"white"};
    color: ${(props:any)=>parseInt(props.id)%2===0 && "white"};
`
const Label = styled.div`
    margin: 2px;
    border-radius: 5px;
    border: solid 1px #A6ACAF;
    padding: 2px;
    cursor: pointer;
    &:hover {
        transform: scale(1.02,1.05);
    }
`

export interface PictureProps{
    pic: PictureInterface
    updateLabel: (id:number,title:string)=>void
}

export default function Picture(props:PictureProps){
    const [isLabelFocused,setIsLabelFocused] = useState<boolean>(false);
    const [imageTitle, setImageTitle] = useState<string>(props.pic.title)
    const [updated, setUpdated] = useState<boolean>(false);
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
        if(textContent!==props.pic.title){setUpdated(true);}
        setImageTitle(textContent);
        //dispatch text content to store
        setIsLabelFocused(false);
    }
    const handleReset = ()=>{
        setUpdated(false);
        setImageTitle(props.pic.title);
    }
    const handleClickAway = ()=>{
        setIsLabelFocused(false);
    }
    return(
        <Div id = {props.pic.id.toString()} className="Picture">
            <img src={props.pic.thumbnailUrl} alt="randomImage" style={{margin:"5px"}}></img>
            {isLabelFocused?<ClickAwayListener onClickAway={handleClickAway}>
                <>
                <TextField multiline variant="outlined" id={props.pic.id + "Label"} className="Label" defaultValue={imageTitle}/>
                <Button variant="contained" onClick={handleSave}>Confirm Update</Button>
                </>
                </ClickAwayListener>:<Tooltip title="Click To Edit" arrow>
                    <>
                    <Label id={props.pic.id + "Label"} className="Label" onClick={handleLabelClick}>
                        {imageTitle}
                    </Label>
                    {updated && <Button variant="contained" onClick={handleReset}>Reset</Button>}
                    </>
                </Tooltip>}
            <div>{Date.now()}</div>
        </Div>
    )  
}

