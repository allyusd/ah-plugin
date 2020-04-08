"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionhero_1 = require("actionhero");
class CreateChatRoom extends actionhero_1.Action {
    constructor() {
        super();
        this.name = "createChatRoom";
        this.description = "I will create a chatroom with the given name";
        this.inputs = {
            name: {
                required: true,
            },
        };
    }
    async run({ params, response }) {
        response.didCreate = await actionhero_1.chatRoom.add(params.name);
    }
}
exports.CreateChatRoom = CreateChatRoom;
