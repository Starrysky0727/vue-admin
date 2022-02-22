<template>
  <el-dialog v-model="visible">
    <el-form ref="formRef" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form></el-dialog
  >
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "DialogAddCategory",

  setup() {
    const state = reactive({
      visible: false,
      form: {
        name: "Hi",
        region: "X",
        date1: "X",
        date2: "X",
        delivery: false,
        type: ["x", "u"],
        resource: "X",
        desc: "X",
      },
    });
    // 开启弹窗
    const open = () => {
      state.visible = true;
    };
    // 关闭弹窗
    const close = () => {
      state.visible = false;
    };
    const onSubmit = () => {
      console.log("submit!");
    };

    return {
      ...toRefs(state),

      open,
      close,
      onSubmit,
    };
  },
};
</script>