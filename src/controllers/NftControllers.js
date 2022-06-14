const Nft = require("../models/table");

let message = "";

const orderBYId = { order: [['id', 'ASC']] };



const getAll = async (req, res) =>{
  try {
    const nft = await Nft.findAll(orderBYId);
    res.render("index", {
      nft,
      nftsPut: null,
      nftsDel: null,
      message,
      
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};


const getById = async (req, res) => {
  try {
    const nft = await Nft.findByPk(req.params.id);    
    res.render("sobre", {
      nft    
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};


const criar = (req, res) => {
  try {
    res.render("criar");
  } catch (err) {
    res.status(500).send({ err: err.message });
  };
};
const criacao = async (req, res) => {
  try {
    const nft = req.body;
    if (
      !nft.nome ||
      !nft.valor ||
      !nft.imagem

    ) {
      message = "Preencha todos os campos para cadastro!"
      type = "danger";
      return res.redirect("/criar");
    }
    await Nft.create(nft);// acho que o erro é aqui
     res.redirect('/')
  } catch (err) {
    res.status(500).send({ err: err.message });
  };
};
const editar1 = async (req, res) => {
  const nft = await Nft.findByPk(req.params.id);
  if (!nft) {
    res.render('editar', {
      message: "Nft não foi encontrado!"
    })
  }
  res.render('editar', {
    nft,
    message: ''
  })

}

const editar = async (req, res) => {
  try {
    const nft = await Nft.findByPk(req.params.id);
    const { nome, valor, imagem } = req.body;

    nft.nome = nome;
    nft.valor = valor;
    nft.imagem = imagem;

    const nftEditado = await nft.save();
  
    res.redirect('/');

  } catch (err) {
    res.status(500).send({ err: err.message });
  };
}


const deletar = async (req, res) => {
  try {
    await Nft.destroy({ where: { id: req.params.id } });
    message = 'nft removido com sucesso'
    res.redirect('/')
  } catch (err) {
    res.status(500).send({ err: err.message });
  };
}

module.exports = {
  getAll,
  getById,
  criar,
  criacao,
  editar1,
  editar,
  deletar,
  
};