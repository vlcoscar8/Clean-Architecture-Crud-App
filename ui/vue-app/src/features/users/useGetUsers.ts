import {usePlocState} from "@/core/usePlocState";
import {basePloc, usedPloc} from "../../../../../features/users";

export const useGetUsers = () => {
    usedPloc.allUsers()

    return usePlocState(basePloc)
}
