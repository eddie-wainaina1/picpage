import Picture from "./Picture"; 
import picAPI from "../resources/picAPI";
// import { ListProps } from "./interfaces";
import store from "../stateManagement/StateStore";
import { useEffect } from "react";
import { addPic } from "../stateManagement/actions";

export const ListContainer = ()=> {
    useEffect(() => {
        (async()=>{
            let data:any = await picAPI();
            for (let i in data){
                store.dispatch(addPic(data[i]))
            }
        })();
    }, [])
    const appState = store.getState();
    return(
        <div>
            {
                appState.data.length?appState.data.map(pic=><li><Picture {...pic}/></li>)
                : <div> <strong>No Objects In State</strong> </div>
            }
        </div>
    )
}
