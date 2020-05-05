<template>
  <div>
    <el-row :gutter="10">
      <!-- <div><el-button type="danger">危险按钮</el-button></div> -->
      <el-col :span="8"><div class="content">展示图1</div></el-col>
      <el-col :span="8"><div class="content">展示图2</div></el-col>
      <el-col :span="8"><div class="content">展示图3</div></el-col>
    </el-row>
  </div>
</template>

<script>
import { Button, Row,Col } from "element-ui";
export default {
  name: "Home",
  props: {},
  data() {
    return {};
  },
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col
  }
};
</script>

<style lang='stylus' scoped>
div.content 
  background red
</style>
