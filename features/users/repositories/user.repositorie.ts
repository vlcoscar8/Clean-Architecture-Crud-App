import {UserGet} from "../uses_cases/user_get";

export class UserRepositorie {
    constructor(private readonly UserGet: UserGet) {
    }

    public allUsers() {
        this.UserGet.execute()
    }

}