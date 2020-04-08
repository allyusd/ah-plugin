import { Initializer, api } from "actionhero";

export class XInitializers extends Initializer {
  constructor() {
    super();
    this.name = "x";
  }

  async initialize() {
    const redis = api.redis.clients.client;

    // do something
    let key: string = "test-key";
    let testData: string = "test-data";
    await redis.set(key, testData);
    const data = await redis.get(key);
    console.log("x:", data);
  }
}
