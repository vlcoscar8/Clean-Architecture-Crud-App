import {Ploc} from "../../../core/domain/Ploc";
import {User} from "../models/user.model";

export class UserPloc {
    constructor(private readonly Ploc: Ploc) {
    }

    sendState(state) {
        this.Ploc.updateState(state)
    }

    addUser(response) {
        const updatedState: User[] = [...this.Ploc.state, response]
        this.sendState(updatedState)
    }

    deleteUser(id) {
        let currentState: User[] = this.Ploc.state
        const pointedUser: User = currentState.find(user => user.id === id)

        currentState.splice(currentState.indexOf(pointedUser), 1)

        this.sendState(currentState)
    }
}