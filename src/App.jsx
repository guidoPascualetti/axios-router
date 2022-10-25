import { useState } from 'react'
import MirarBorrar from "./MirarBorrar";
import SaberRuta from "./SaberRuta";
import {
Routes,
Route

 
} from "react-router-dom";
function App() {
  const [selected, setSelected] = useState("0")

  return (
    <Routes>
      <Route  
        element={<MirarBorrar />}
        path="/"
      />
      <Route  
        element={<SaberRuta />}
        path="/saberruta"
      />  
    </Routes>
  )
}

export default App
