import { useState } from 'react';

function Categorias() {
  const [categoria, setCategoria] = useState('');

  async function consultarCategorias() {
    let respuesta = await fetch('http://127.0.0.1:3000/api/categorias');
    let datos = await respuesta.json();
    console.log(datos);
    setCategoria(datos.nombreCategoria);
  }

  return (
    <div>
      <p>{categoria}</p>
      <button onClick={consultarCategorias}>Ver Categorías</button>
    </div>
  );
}

export default Categorias;
