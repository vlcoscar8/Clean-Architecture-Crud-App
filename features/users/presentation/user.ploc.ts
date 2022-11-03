import {Ploc} from "../../../core/domain/Ploc";

export class UserPloc {
    constructor(private readonly Ploc: Ploc) {
    }

    sendState(state) {
        this.Ploc.updateState(state)
    }
}