const { Sequelize } = require("sequelize");
const database = require("../database/bd");

const Nft = database.sequelize.define("nft", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },  
  imagem: {
    type: Sequelize.STRING,
    allowNull: false,
  }, valor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
    freezeTableName: true,
    timestamps: false,
    createAt: false,
    updateAt: false,
}
);

/* const initTable = async () =>{
    await Nft.sync();
  }
  
  initTable(); */

module.exports = Nft;