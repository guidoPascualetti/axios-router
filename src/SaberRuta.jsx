import { useEffect, useState } from 'react';

import {useLocation} from "react-router-dom";
export default function SaberRuta() {
 
  const [user, setUser] = useState([])


  const location = useLocation()

  useEffect(()=>{
   
    console.log('hash', location.hash);
    console.log('pathname', location.pathname);
    console.log('search', location.search);

    

    


  },[])
  return (
    <>
      <h1>dONde EsTY</h1>
      
    </>
  );
}
