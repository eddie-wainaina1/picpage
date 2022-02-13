import fetch from 'node-fetch'
import { PictureProps } from '../components/interfaces';

export default async function picAPI():Promise<PictureProps[]>{
    const url = "https://jsonplaceholder.typicode.com/photos"
    const res = await fetch(url);
    if (res.statusText ==='ok'){
        const data:any = await res.json();
        return data;
    }
    else{
        console.log("Error occured while fetching data")
    }   
    return []
}


