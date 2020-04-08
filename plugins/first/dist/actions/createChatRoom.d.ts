import { Action } from "actionhero";
export declare class CreateChatRoom extends Action {
    constructor();
    run({ params, response }: {
        params: any;
        response: any;
    }): Promise<void>;
}
