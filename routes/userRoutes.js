const express = require("express");

const routes = express.Router();

const Controller = require("../controllers/userControllers.js" )

routes.get("/" , userControllers.getUser)
routes.get("/id" ,userControllers.getUserByid )
routes.post("/" , userControllers.createUser)
routes.put("/id" , userControllers.updateUser )
routes.delete("/id" ,userControllers.deleteUser )



