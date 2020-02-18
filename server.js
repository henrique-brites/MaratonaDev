// configurando o servidor
const express = require("express");
const server = express();

// configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'));

// habilitar body do formulario
server.use(express.urlencoded({ extended: true }));

// configurando a tamplate engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
  express:server,
  noCache: true,
});


// lista de doadores: Vetor ou Array
const donors = [
  {
    name: "Henrique Brites",
    blood: "AB+"
  },
  {
    name: "Luiz Flavio",
    blood: "B+"
  },
  {
    name: "Pedro Silva",
    blood: "A+"
  }
  ,{
    name: "Maria Brites",
    blood: "O+"
  }
]




// configurar a apresentação da página
server.get("/", function(req, res) {
  return res.render("index.html", { donors });
});

server.post("/", function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const blood = req.body.blood;

  donors.push({
    name: name,
    blood: blood,
  });

  return res.redirect("/");
});

// ligar o servidor e permitir o acesso na portaq 3000
server.listen(3000, function() {
  console.log("iniciei o servidor");
});