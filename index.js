import express from "express";
import hbs from "hbs";
import path from "path";
//es para recuperar ruta raiz
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); //ocupo el path busca la direccion
const __dirname = dirname(__filename)              // se trae la data del archivo donde trabajamos

const app = express();

let arrayproductos = [{
    nombre: "rosa",
    descripcion: "Esta es una rosa",
    link: "images/flor1.jpg"},
    {
        nombre: "clavel",
        descripcion: "Esto es una rosa2",
        link: "images/flor2.jpg"},
    {
        nombre: "rosa",
        descripcion: "Esta es una rosa3",
        link: "images/flor3.jpg"}]

app.set("view engine", "hbs");
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials")

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/contacto", (req, res)=>{
    res.render("contacto");
});

app.get("/plano", (req, res)=>{
    res.render("plano");
});
app.get("/productos", (req, res)=>{
    res.render("productos", {listado:arrayproductos});
});

app.get("/*", (req, res)=>{
    res.send("Producto no existe, y nunca existio");
});























const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

