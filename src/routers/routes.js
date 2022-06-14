const routes = require("express").Router();
const  NftControllers= require("../controllers/NftControllers");

routes.get("/", NftControllers.getAll);
routes.get("/sobre/:id", NftControllers.getById);
routes.get("/criar", NftControllers.criar);
routes.post("/criacao", NftControllers.criacao);
routes.get("/editar/:id", NftControllers.editar1);
routes.post("/editar/:id", NftControllers.editar);
routes.get("/deletar/:id", NftControllers.deletar);



module.exports = routes;