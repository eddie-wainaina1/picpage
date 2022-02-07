import { useEffect } from 'react';
import store from '../stateManagement/StateStore';
import { PictureProps } from './interfaces';

export default function Picture(props:PictureProps){
    const storeValue = store.getState().data[props.id]
    let title = storeValue.title
    useEffect(() => {
        const unsubscribe = store.subscribe(()=>{
            
        })
        return () => {
            unsubscribe();
        }
    }, [storeValue]);
    return(
        <div id = {props.id.toString()}>
            <img src={props.thumbnailUrl}></img>
            <div id={props.id + "Label"}>{title}</div>
            <div>{Date.now()}</div>
        </div>
    )
}

