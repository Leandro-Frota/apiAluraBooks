// import http from "http"
import app from "./src/app.js"
import "dotenv/config"

const PORT = 3000

// const rotas = {
//     "/": "Curso de node.js",
//     "/livros": "Entrei na rota livros",
//     "/autores": "Entrei na rota autores"
// };

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas[req.url]);
// });



app.listen(PORT,()=>{console.log("Servidor escutando")});