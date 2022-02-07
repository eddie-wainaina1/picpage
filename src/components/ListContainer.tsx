import Picture from "./Picture"; 
import picAPI from "../resources/picAPI";
import { ListProps } from "./interfaces";
import store from "../stateManagement/StateStore";

const ListContainer = (props:ListProps)=> {
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
