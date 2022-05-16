import type {MutationTree} from "vuex";
import type {UserState} from "@/store/user/types";

export enum UserMutations {
  SET_USER_NAME = "SET_USER_NAME",
}

export const mutations: MutationTree<UserState> = {
  [UserMutations.SET_USER_NAME] (state, payload: string) {
    state.userName = payload;
  }
}
