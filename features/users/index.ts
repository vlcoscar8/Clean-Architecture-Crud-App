import {Ploc} from "../../core/domain/Ploc";
import {UserRepositorie} from "./repositories/user.repositorie";
import {UserGet} from "./uses_cases/user_get";
import {UserPloc} from "./presentation/user.ploc";

export const basePloc = new Ploc([])
export const usedPloc = new UserRepositorie(new UserGet(new UserPloc(basePloc)))