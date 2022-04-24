const express = require('express')

const body_parser = require('body-parser');

const routes = require('./routes');

class index {
    constructor(){
        this.app = express();
        this.middleware()
        this.routes()
    };

    middleware(){
        this.app.use(body_parser.json());
    }

    routes(){
        this.app.use(routes);
    }

};

module.exports = new index().app;
