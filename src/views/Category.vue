<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="xh" label="序号" width="60" />
    <el-table-column prop="date" label="日期" width="150" />
    <el-table-column prop="name" label="姓名" width="120" />
    <el-table-column prop="state" label="国家" width="120" />
    <el-table-column prop="city" label="城市" width="120" />
    <el-table-column prop="address" label="居住地" width="600" />
    <el-table-column prop="zip" label="邮编" width="120" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default>
        <el-button type="text" size="small" @click="handleClick"
          >详情</el-button
        >
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <DialogAddCategory ref="addGood" />
</template>

<script>
import DialogAddCategory from "../components/DialogAddCategory.vue";
import { onUnmounted, ref } from "vue";
export default {
  name: "Category",
  components: {
    DialogAddCategory,
  },
  data() {
    return {
      tableData: [
        {
          xh: 1,
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Home",
        },
        {
          xh: 2,
          date: "2016-05-02",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
        {
          xh: 3,
          date: "2016-05-04",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Home",
        },
        {
          xh: 4,
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
          tag: "Office",
        },
      ],
    };
  },
  setup() {
    const addGood = ref(null);
    const handleClick = () => {
      console.log(addGood.value);
      addGood.value.open();
    };
    return {
      addGood,
      handleClick,
    };
  },
};
</script>

<style scoped>
</style>