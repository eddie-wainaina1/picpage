export default async function picAPI(){
    const url = "https://jsonplaceholder.typicode.com/photos"
    const res = await fetch(url);
    const data = await res.json();
    return data
}
