import {UserGet} from "../uses_cases/user_get";
import {UserPost} from "../uses_cases/user_post";
import {UserDelete} from "../uses_cases/user_delete";

export class UserRepositorie {
    constructor(
        private readonly UserGet: UserGet,
        private readonly UserPost: UserPost,
        private readonly UserDelete: UserDelete)
    {}

    public allUsers() {
        this.UserGet.execute()
    }

    public addUser(name) {
        const body = { name }

        this.UserPost.execute(body)
    }

    public deleteUser(id) {
        this.UserDelete.execute(id)
    }

}