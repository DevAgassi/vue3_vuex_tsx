import {defineComponent, computed, onMounted } from "vue";
import {useStore, mapGetters, mapMutations} from 'vuex';
import { useVuex } from '@vueblocks/vue-use-vuex';
import { key } from '@/store';
import "@/assets/components/icon.css";
import { UserMutations } from '@/store/user/mutations';

export default defineComponent({
  name: "HelloWorld",
  setup () {
    const store = useStore(key);
    const { useMutations } = useVuex('User', store);
    // const store = reactive(useStore(key));
    const { getUserInfo } = mapGetters('User', ['getUserInfo']);
    const { SET_USER_NAME } = useMutations([UserMutations.SET_USER_NAME]);
    const userName = computed({
      get(): string {
        return store.state.User.userName;
      },
      set(newValue: string): void {
        //store.commit('User/'+UserMutations.SET_USER_NAME, newValue);
        SET_USER_NAME(newValue);
      },
    })

    onMounted(()=> {
      setTimeout(()=> {
        userName.value = "Updated Jhon";
      }, 3000)
    });

    return {
      msg: computed(()=> store.state.msg),
      //userName: computed(():string => store.state.user.userName),
      //msg: toRef(store.state, 'msg'),
      handleTitleClick: ()=> store.commit('updateMsg'),
      //userInfo: computed(()=> store.getters["user/getUserInfo"]),
      getUserInfo,
      userName,
      SET_USER_NAME,
    }
  },
  render() {
    return (
      <>
        <div class="greetings">
          <h1 onClick={this.handleTitleClick} class="green">{this.msg}</h1>
          <h3>
            {this.getUserInfo()}<br />
            {this.userName}<br />
            You’ve successfully created a project with
            <a target="_blank" href="https://vitejs.dev/">Vite</a> +
            <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
          </h3>
        </div>
      </>
    );
  },
});
