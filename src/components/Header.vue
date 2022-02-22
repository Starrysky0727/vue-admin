<template>
  <div class="header">
    <span style="font-size: 20px">{{ title }}</span>
  </div>
</template>

<script>
import { onMounted, toRefs, reactive } from "vue";
import { useRouter } from "vue-router";
import { pathMap } from "@/utils";
export default {
  name: "Header",
  setup() {
    const router = useRouter();
    const state = reactive({
      title: "dashboard",
    });

    onMounted(() => {});
    router.afterEach((to) => {
      console.log("to", to);
      state.title = pathMap[to.name];
      console.log(state);
      //state.hasBack = ["level2", "level3", "order_detail"].includes(to.name);
    });
    return {
      ...toRefs(state),
      //title,
      //logout,
      // back,
    };
  },
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #ccc;
  padding: 10px 15px;
}
</style>