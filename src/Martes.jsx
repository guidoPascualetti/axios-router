import { useEffect, useState } from 'react';
import axios from "axios";

export default function Martes() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const [importantData, setImportantData] = useState({});
  useEffect(()=>{
    const source = axios.CancelToken.source();
    console.log(source)
    axios.get(url, {
      cancelToken: source.token
    }).then((response) => {
      setImportantData(response.data);
    }).catch((error) => {
      if (axios.isCancel(error)) return;
    });

    return () => {
      console.log("cancelado")
      source.cancel()};
  },[])
  return (
    <>
      <h1>Martes</h1>
      
    </>
  );
}
