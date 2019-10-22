import express from 'express';
import routes from './routes.js';
class App {
    constructor() {
        this.server = express();
        this.middlewares();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(this.routes);
    }
}
export default new App().server;