import fetch from 'node-fetch'

export default async function picAPI(){
    const url = "https://jsonplaceholder.typicode.com/photos"
    const res = await fetch(url);
    const data = await res.json();
    return data
}
let data = picAPI().then(dt=>dt).catch(e=>e);
console.log(data);
