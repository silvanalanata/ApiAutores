
    const express = require('express');

  

    const { Router } = require("express");
    const router = Router();
    //router.use(express.urlencoded({extended: true}));
    router.use(express.json());
    
    const {   getAll, postNuevo, getId, putUpdateId, deleteId } = require("../controllers/autores_controller");
    
    
    router.get("/getAll", getAll);
    
    router.post("/postNuevo", postNuevo);
    
    
    router.get("/getId/:id", getId);
    
    router.put("/putUpdateId", putUpdateId);
    
    router.delete("/deleteId/:id", deleteId);
    
    
    module.exports = router;