import type { Module } from "vuex";
import type {State} from "@/store/types";
import type {UserState} from "@/store/user/types";

const state: UserState = {
  userName: "Jhon",
  email: "Jhon@gmail.com",
  lastLogin: new Date(),
}

export const user: Module<UserState, State> = {
  namespaced: true,
  state,
}
