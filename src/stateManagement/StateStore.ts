//structure
// state has an array of objects from api of the form
/*
Array<PictureProps>
*/
// We also maintain the id value of selected object label
//Therefore, overall structure::
/*
{
    selectedId: <number>
    data: Array<PictureProps>
}
*/
import { createStore } from "redux";
import { clickReducer } from "./reducers";
const store = createStore(clickReducer);
export default store 