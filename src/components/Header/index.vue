<!--
 * @Author: DemoSting1 1562752074@qq.com
 * @Date: 2024-03-27 22:05:01
 * @LastEditors: DemoSting1 1562752074@qq.com
 * @LastEditTime: 2024-03-30 08:49:27
 * @FilePath: \model_viewer_v1\src\components\header\header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="header-container">
    <div id="header-icon">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
    </div>
    <div>
      <el-select v-model="value" placeholder="Select" style="width: 240px">
        <el-option-group
          v-for="group in options"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="item in group.models"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-option-group>
      </el-select>
    </div>
    <div id="model-control-button-list">
      <img class="model-control-button" src="/images/放大.png" @click="handleZoomInClick" style="width: 20px;height: 20px;">
      <img class="model-control-button" src="/images/缩小.png" @click="handleZoomOutClick" style="width: 20px;height: 20px;">
      <div class="split-line">|</div>
      <img class="model-control-button" src="/images/侧视图.png" style="width: 20px;height: 20px;">
      <img class="model-control-button" src="/images/俯视图.png" style="width: 20px;height: 20px;">
      <img class="model-control-button" src="/images/正视图.png" style="width: 20px;height: 20px;">
      <img class="model-control-button" src="/images/轴测图.png" style="width: 20px;height: 20px;">
      <div class="split-line">|</div>
      <img class="model-control-button" src="/images/显示.png" style="width: 20px;height: 20px;">
      <img class="model-control-button" src="/images/隐藏.png" style="width: 20px;height: 20px;">
    </div>
    <div id="model-control-button-list-1">
      <img class="model-control-button" src="/images/问题.png" style="width: 20px;height: 20px;">
    </div>
  </div>
</template>

<script>
import EventBus from "@/utils/EventBus"
import { TOYS_MODEL_FILE_LIST_JSON } from "@/constants/constants.js"
export default {
  name: "ModelViewerHeader",
  components: {
  },
  data() {
    return {
      value: "",
      options: [
        TOYS_MODEL_FILE_LIST_JSON
      ],
    };
  },
  methods: {
    handleZoomInClick() {
      EventBus.emit("modelZoomInEvent")
    },
    handleZoomOutClick() {
      EventBus.emit("modelZoomOutEvent")
    },
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 1px solid var(--el-border-color);
  background-color: #1e1e1e;
  box-sizing: border-box;
}
#header-icon {
  margin-right: 30px;
}

#model-control-button-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  margin-left: 50px;
}
#model-control-button-list-1 {
  display: flex;
  align-items: center;
  margin-left: auto  /* ! 设置元素靠右显示 */
}
.model-control-button {
  cursor: pointer;
  margin-right: 20px;
}

.split-line {
  margin-left: 10px;
  margin-right: 30px;
  color: #f3f3f3;
  font-size: 18px;
}
</style>
