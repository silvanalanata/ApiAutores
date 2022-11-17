
    const express = require('express');

  

    const { Router } = require("express");
    const router = Router();
    //router.use(express.urlencoded({extended: true}));
    router.use(express.json());
    
    const { getAll, postNuevo, getId, putUpdateId, deleteId, getCitasAll, citasDelete, nuevasCItas, voteadd } = require("../controllers/autores_controller");
    
    
    router.get("/getAll", getAll);
    
    router.post("/postNuevo", postNuevo);
    
    
    router.get("/getId/:id", getId);
    
    router.put("/putUpdateId", putUpdateId);
    
    router.delete("/deleteId/:id", deleteId);

    router.get("/citasAll/:id", getCitasAll);
    
    router.patch("/citasdelete/:id", citasDelete);
    
    router.put("/nuevacita/:id", nuevasCItas);

    router.put("/voteup/:id", voteadd);

    
    
    module.exports = router;