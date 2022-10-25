import { useState } from 'react';
import Lunes from "./Lunes";
import Martes from "./Martes";
import Miercoles from "./Miercoles";
export default function MirarBorrar() {
  const [selectedButton, setSelectedButton] = useState('lunes');
  const data = {
    lunes: {
      title: 'Lunes',
      descripcion: 'Esto es Lunes',
      state: 'lunes',
      component : <Lunes />
    },
    martes: {
      title: 'Martes',
      descripcion: 'Esto es Martes',
      state: 'martes',
      component : <Martes />
    },
    miercoles: {
      title: 'Miercoles',
      descripcion: 'Esto es Miercoles',
      state: 'miercoles',
      component : <Miercoles />
    },
  };
  return (
    <>
      <h1>hola</h1>
      {Object.keys(data).map(item => (
        <button key={item} onClick={() => setSelectedButton(data[item].state)}>
          {item}
        </button>
      ))}
      <div>
      {data[selectedButton].component}
      </div>
    </>
  );
}
