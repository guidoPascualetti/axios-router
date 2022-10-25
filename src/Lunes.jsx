import { useEffect, useState } from 'react';
import {getUsers} from "./axios";
import {useLocation} from "react-router-dom";
export default function Lunes() {
 
  const [user, setUser] = useState([])


  const location = useLocation()
  useEffect(()=>{
   
  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);
    const axios = getUsers()
    const data = axios.then(d=>console.log(d))
    console.log(axios.config)

  

    


  },[])
  return (
    <>
      <h1>Lunes</h1>
      
    </>
  );
}
