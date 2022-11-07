import {Http} from "../../../core/repositories/Http";
import {UserPloc} from "../presentation/user.ploc";
import {User} from "../models/user.model";

export class UserPost extends Http {
    private method: string = 'POST'
    private url: string = 'https://636408aa8a3337d9a2efac2e.mockapi.io/users'

    constructor(private readonly UserBloc: UserPloc) {
        super();
    }

    public async execute(body) {
        const response: User[] = await this.executed(this.url, this.method, body)
        this.UserBloc.addUser(response)
    }
}