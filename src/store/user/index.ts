import type { Module } from "vuex";
import type {State} from "@/store/types";
import type {UserState} from "@/store/user/types";
import {getters} from "@/store/user/getters";
import {mutations} from "@/store/user/mutations";

const state: UserState = {
  userName: "Jhon",
  email: "Jhon@gmail.com",
  lastLogin: new Date(),
}

export const User: Module<UserState, State> = {
  namespaced: true,
  state,
  getters,
  mutations,
}
