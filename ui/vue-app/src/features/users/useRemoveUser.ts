import {basePloc, usedPloc} from "../../../../../features/users";
import {usePlocState} from "@/core/usePlocState";

export const useRemoveUser = (id) => {
    usedPloc.deleteUser(id)

   return usePlocState(basePloc)
}