import express from "express";

const routes = (app) => {
    // rotas principais
    app.route('/').get((req, res) => {
        res.status(200).json({titulo: "Teste"});
    });
    app.route('/api/test').get((req,res) => {
        res.status(200).json({test: 1});
    });
};

export default routes;