const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/bd');
const Filme = require('./models/filme.model');
const Artista = require('./models/artista.model');
const Ficha = require('./models/fichaTec.model');
const Diretor = require('./models/diretor.model');
const methodOverride = require('method-override');

const app = express();

app.use(methodOverride('_method'));

// Middleware para formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurando Handlebars
app.engine('handlebars', exphbs.engine({defaultLayout: false}));

app.set('view engine', 'handlebars');

// Rota GET - Página inicial
app.get('/', (req, res) => {

  res.render('home', {
    titulo: 'Página Inicial'
  });

});



// Rota GET - Listar filmes
app.get('/filmes', async (req, res) => {
  const filmes = await Filme.findAll({raw: true});
  res.render('filmes', { filmes });
});

// Rota GET - Formulário de cadastro
app.get(
  '/filmes/cadastrar', 
  (req, res) => res.render('cadastrarFilme')
);

// Rota POST - Cadastrar filme
app.post('/filmes', async (req, res) => {

  const nome = req.body.nome;
  const ano = req.body.ano;

  await Filme.create({
    nome: nome, 
    ano: ano
  });

  res.redirect('/filmes');
});

app.get(
  '/filmes/:id/editar', 
  async (req, res) => {
    const id = req.params.id;
    const filme = await Filme.findByPk(id, {raw: true});
    res.render('editarFilme', { filme });
  }
);

app.get(
  '/filmes/:id',
  async (req, res) => {
    const id = req.params.id;
    const filme = await Filme.findByPk(id, {raw: true});

    res.render('detalharFilme',{ filme });
  }
)

app.put(
  '/filmes/:id', 
  async (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const ano = req.body.ano;
    
    const filme = await Filme.findByPk(id);
    
    filme.nome = nome;
    filme.ano = ano;
    await filme.save();

    res.redirect('/filmes');
  }
);

app.delete(
  '/filmes/:id', 
  async (req, res) => {
    const id = req.params.id;
    const filme = await Filme.findByPk(id);
    await filme.destroy();
    res.redirect('/filmes');
  }
);


// Rota GET - Listar artistas
app.get('/artistas', async (req, res) => {
  const artistas = await Artista.findAll({raw: true});
  res.render('artistas', { artistas });
});

// Rota GET - Formulário de cadastro
app.get(
  '/artistas/cadastrar', 
  (req, res) => res.render('cadastrarArtista')
);

// Rota POST - Cadastrar artista
app.post('/artistas', async (req, res) => {

  const nome = req.body.nome;
  const idade = req.body.idade;

  await Artista.create({
    nome: nome, 
    idade: idade
  });

  res.redirect('/artistas');
});

app.get(
  '/artistas/:id/editar', 
  async (req, res) => {
    const id = req.params.id;
    const artista = await Artista.findByPk(id, {raw: true});
    res.render('editarArtista', { artista });
  }
);

app.get(
  '/artistas/:id',
  async (req, res) => {
    const id = req.params.id;
    const artista = await Artista.findByPk(id, {raw: true});

    res.render('detalharArtista',{ artista });
  }
)

app.put(
  '/artistas/:id', 
  async (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const idade = req.body.idade;
    
    const artista = await Artista.findByPk(id);
    
    artista.nome = nome;
    artista.idade = idade;
    await artista.save();

    res.redirect('/artistas');
  }
);

app.delete(
  '/artistas/:id', 
  async (req, res) => {
    const id = req.params.id;
    const artsita = await Artista.findByPk(id);
    await artista.destroy();
    res.redirect('/artistas');
  }
);



// Rota GET - Listar ficha técnica
app.get('/fichas', async (req, res) => {
  const fichas = await Ficha.findAll({raw: true});
  res.render('fichas', { fichas });
});

// Rota GET - Formulário de cadastro
app.get(
  '/fichas/cadastrar', 
  (req, res) => res.render('cadastrarFicha')
);

// Rota POST - Cadastrar ficha
app.post('/fichas', async (req, res) => {

  const nome = req.body.nome;
  const direcao = req.body.direcao;
  const artistas = req.body.artistas;
  const sumario = req.body.sumario;

  await Ficha.create({
    nome: nome, 
    direcao: direcao,
    artistas: artistas,
    sumario: sumario
  });

  res.redirect('/fichas');
});

app.get(
  '/fichas/:id/editar', 
  async (req, res) => {
    const id = req.params.id;
    const ficha = await Ficha.findByPk(id, {raw: true});
    res.render('editarFicha', { ficha });
  }
);

app.get(
  '/fichas/:id',
  async (req, res) => {
    const id = req.params.id;
    const ficha = await Ficha.findByPk(id, {raw: true});

    res.render('detalharFicha',{ ficha });
  }
)

app.put(
  '/fichas/:id', 
  async (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const direcao = req.body.direcao;
    const artistas = req.body.artistas;
    const sumario = req.body.sumario;
    
    const ficha = await ficha.findByPk(id);
    
    ficha.nome = nome;
    ficha.direcao = direcao;
    ficha.artistas = artistas;
    ficha.sumario = sumario;
    await ficha.save();

    res.redirect('/fichas');
  }
);

app.delete(
  '/fichas/:id', 
  async (req, res) => {
    const id = req.params.id;
    const ficha = await Ficha.findByPk(id);
    await ficha.destroy();
    res.redirect('/fichas');
  }
);


// Rota GET - Listar diretores
app.get('/diretores', async (req, res) => {
  const diretores = await Diretor.findAll({raw: true});
  res.render('diretores', { diretores });
});

// Rota GET - Formulário de cadastro
app.get(
  '/diretores/cadastrar', 
  (req, res) => res.render('cadastrarDiretor')
);

// Rota POST - Cadastrar artista
app.post('/diretores', async (req, res) => {

  const nome = req.body.nome;
  const idade = req.body.idade;

  await Diretor.create({
    nome: nome, 
    idade: idade
  });

  res.redirect('/diretores');
});

app.get(
  '/diretores/:id/editar', 
  async (req, res) => {
    const id = req.params.id;
    const diretor = await Diretor.findByPk(id, {raw: true});
    res.render('editarDireto', { diretor });
  }
);

app.get(
  '/diretores/:id',
  async (req, res) => {
    const id = req.params.id;
    const diretor = await Diretor.findByPk(id, {raw: true});

    res.render('detalharDiretor',{ diretor });
  }
)

app.put(
  '/diretores/:id', 
  async (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const idade = req.body.idade;
    
    const diretor = await Diretor.findByPk(id);
    
    diretor.nome = nome;
    diretor.idade = idade;
    await diretor.save();

    res.redirect('/diretor');
  }
);

app.delete(
  '/diretores/:id', 
  async (req, res) => {
    const id = req.params.id;
    const diretor = await Diretor.findByPk(id);
    await diretor.destroy();
    res.redirect('/diretores');
  }
);


async function conectarBD() {
  try {
    await sequelize.sync();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (erro) {
    console.error('Erro ao conectar:', erro);
  }
}

conectarBD();

// Inicializando servidor
app.listen(3000, () => {

  console.log('Servidor executando em http://localhost:3000');

});