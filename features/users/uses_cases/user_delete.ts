import {Http} from "../../../core/repositories/Http";
import {UserPloc} from "../presentation/user.ploc";
import {User} from "../models/user.model";

export class UserDelete extends Http {
    private method: string = 'DELETE'
    private url: string = 'https://636408aa8a3337d9a2efac2e.mockapi.io/users/'

    constructor(private readonly UserBloc: UserPloc) {
        super();
    }

    public async execute(id) {
        await this.executed(`${this.url}${id}`, this.method)
        this.UserBloc.deleteUser(id)
    }
}