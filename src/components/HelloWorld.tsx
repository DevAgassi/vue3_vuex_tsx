import {defineComponent, computed, reactive, toRef } from "vue";
import { useStore, mapGetters } from 'vuex';
import { key } from '@/store';
import "@/assets/components/icon.css";

export default defineComponent({
  name: "HelloWorld",
  setup () {
    const store = useStore(key);
    // const store = reactive(useStore(key));
    const { getUserInfo } = mapGetters('user', ['getUserInfo']);

    return {
      msg: computed(()=> store.state.msg),
      userName: computed(():string => store.state.user.userName),
      //msg: toRef(store.state, 'msg'),
      handleTitleClick: ()=> store.commit('updateMsg'),
      //userInfo: computed(()=> store.getters["user/getUserInfo"]),
      getUserInfo,
    }
  },
  render() {
    return (
      <>
        <div class="greetings">
          <h1 onClick={this.handleTitleClick} class="green">{this.msg}</h1>
          <h3>
            {this.getUserInfo()}<br />
            You’ve successfully created a project with
            <a target="_blank" href="https://vitejs.dev/">Vite</a> +
            <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
          </h3>
        </div>
      </>
    );
  },
});
