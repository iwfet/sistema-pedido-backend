import express, { Express } from "express";
import { routes } from "./routes";
import cors from "cors";
import compression from "compression";

class App {
	public server: Express;
	constructor() {
		this.server = express();
		this.middleware();
		this.routes();
	}
	middleware() {
		this.server.use(express.json({ limit: "100mb" }));
		this.server.use(cors());
		this.server.use(compression());
	}
	routes() {
		this.server.use(routes);
	}
}

export default new App();
