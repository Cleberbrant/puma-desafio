import { UserModel } from "../../domain/models/userModel"

export interface AddUser {
    add(data: AddUser.Params): Promise<AddUser.Result>
}

export namespace AddUser {
    export type Params = {
        username: string
        avatar: string
        url: string
    };

    export type Result = UserModel;
}