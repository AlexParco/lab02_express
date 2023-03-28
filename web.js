const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.sendFile("./static/inicio.html", {
    root: __dirname,
  });
});

app.get('/catalogo_clientes', (req, res) => {

    res.sendFile('./static/catalogo_clientes.html', {

        root: __dirname

    });

});

app.use((req, res) => {

    res.status(404).send('<h1>No se encontro tu pagina.......!!!!</h1>')

});

app.listen(3000);
console.log(`Server on port ${3000}`);
