import express from "express";

const app = express();

app.use("/", express.static("public"));

app.get("/", (req, res) => {
    res.send("Bienvenidos a Cefé Express");
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
})