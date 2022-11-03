import { UserPloc } from "../presentation/user.ploc";
import { Http } from "../../../core/repositories/Http";
import {User} from "../models/user.model";
export class UserGet extends Http {
    private method: string = 'GET'
    private url: string = 'https://636408aa8a3337d9a2efac2e.mockapi.io/users'

    constructor(private readonly UserBloc: UserPloc) {
        super()
    }

   public async execute() {
        const response: User[] = await this.executed(this.url, this.method)
        this.UserBloc.sendState(response)
    }
}