import type {GetterTree} from "vuex";
import type {UserState} from "@/store/user/types";
import type {State} from "@/store/types";

export const getters: GetterTree<UserState, State> = {
  getUserInfo(state): string {
    return `User Name: ${state.userName} - Email: ${state.email}`;
  }
}
