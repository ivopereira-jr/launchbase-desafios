const express = require('express')//para usar o express
const nunjucks = require('nunjucks')//para usar o nunjucks
const cursos = require('./data')

const server = express()

server.use(express.static('public'))//para acessar o arquivos na public

server.set("view engine", "njk")//para o nunjucks renderizar os arquinos o njk da para mudar pra html caso queira

nunjucks.configure("views", {
   express: server,
   autoescape: false,
   noCache: true
})

//rotas
server.get("/", function (req, res) {
   return res.render("index")
})

server.get("/sobre", function (req, res) {
   return res.render("sobre")
})

server.get("/cursos", function (req, res) {
   return res.render("cursos", { items: cursos })
})

server.get("/cursos/:id", function (req, res) {
   const id = req.params.id;

   const curso = cursos.find(function(curso){
      if(curso.id == id) {
         return true;
      }  
   })

   if(!curso) {
      return res.render("not-found");
   }

   return res.render("curso", {cursos: curso});

});

//rota para pagina de erro 
server.use(function(req, res) {
  res.status(404).render("not-found");
});


server.listen(3000, function () {
   console.log("server in runing")
})