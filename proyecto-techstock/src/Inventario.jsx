import { useState } from 'react';

function Inventario() {
  const [stock, setStock] = useState('');

  async function consultarInventario() {
    let respuesta = await fetch('http://127.0.0.1:3000/api/inventario');
    let datos = await respuesta.json();
    console.log(datos);
    setStock(datos.mensajeStock);
  }

  return (
    <div>
      <p>{stock}</p>
      <button onClick={consultarInventario}>Consultar Inventario</button>
    </div>
  );
}

export default Inventario;
