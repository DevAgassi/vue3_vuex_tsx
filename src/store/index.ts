import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import type { State } from "@/store/types";
import {user} from "@/store/user";

export const key: InjectionKey<Store<State>> = Symbol()

// Create a new store instance.
export const store = createStore({
  state: {
    msg: "You did it! Nice!!!",
  },
  mutations: {
    updateMsg (state) {
      state.msg = "A good choice!!!"
    }
  },
  modules: {
    user,
  }
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}
