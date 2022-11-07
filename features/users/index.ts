import {Ploc} from "../../core/domain/Ploc";
import {UserRepositorie} from "./repositories/user.repositorie";
import {UserGet} from "./uses_cases/user_get";
import {UserPloc} from "./presentation/user.ploc";
import {UserPost} from "./uses_cases/user_post";
import {UserDelete} from "./uses_cases/user_delete";

export const basePloc = new Ploc([])

const userGet = new UserGet(new UserPloc(basePloc))
const userPost = new UserPost(new UserPloc(basePloc))
const userDelete = new UserDelete(new UserPloc(basePloc))

export const usedPloc = new UserRepositorie(userGet, userPost, userDelete)