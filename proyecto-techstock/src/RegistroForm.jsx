import { useState } from 'react';

function RegistroForm() {
  const [resItem, setResItem] = useState('');
  const [resCantidad, setResCantidad] = useState('');
  const [resEstado, setResEstado] = useState('');

  const [item, setItem] = useState('');
  const [cantidad, setCantidad] = useState('');

  async function registrarTransaccion() {
    let resultado = await fetch('http://127.0.0.1:3000/api/transacciones', {
      method: 'POST',
      body: JSON.stringify({
        item: item,
        cantidad: cantidad
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let datos = await resultado.json();
    setResItem(datos.itemProcesado);
    setResCantidad(datos.cantidadProcesada);
    setResEstado(datos.mensajeEstado);
  }

  return (
    <div>
      <input placeholder="Ingrese el ítem" onChange={(e)=>setItem(e.target.value)}/>
      <input placeholder="Ingrese la cantidad" onChange={(e)=>setCantidad(e.target.value)}/>
      <button onClick={registrarTransaccion}>Registrar Transacción</button>
      <p>{resItem}</p>
      <p>{resCantidad}</p>
      <p>{resEstado}</p>
    </div>
  );
}

export default RegistroForm;
