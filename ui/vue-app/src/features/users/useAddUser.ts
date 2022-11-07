import {basePloc, usedPloc} from "../../../../../features/users";
import {usePlocState} from "@/core/usePlocState";

export const useAddUser = (name) => {
    usedPloc.addUser(name)

    return usePlocState(basePloc)
}