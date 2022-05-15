import type {UserState} from "@/store/user/types";

export interface State {
  msg: string;
  user: UserState;
}
