const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5174'
}));

app.get('/api/inventario', (req, res) => {
    res.json({ mensajeStock: "Inventario consultado correctamente en el servidor" });
});

app.get('/api/categorias', (req, res) => {
    res.json({ nombreCategoria: "Categoría: Componentes y Hardware Tecnológico" });
});

app.post('/api/transacciones', (req, res) => {
    const { item, cantidad } = req.body;
    res.json({
        itemProcesado: item,
        cantidadProcesada: cantidad,
        mensajeEstado: "Transacción registrada exitosamente"
    });
});

app.listen(PORT, () => {
    console.log('Servidor ejecutándose correctamente en el puerto ' + PORT);
});