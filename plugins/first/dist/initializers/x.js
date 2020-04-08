"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionhero_1 = require("actionhero");
class XInitializers extends actionhero_1.Initializer {
    constructor() {
        super();
        this.name = "x-plugin";
    }
    async initialize() {
        const redis = actionhero_1.api.redis.clients.client;
        // do something
        let key = "test-key";
        let testData = "test-data";
        await redis.set(key, testData);
        const data = await redis.get(key);
        console.log("x-plugin:", data);
    }
}
exports.XInitializers = XInitializers;
