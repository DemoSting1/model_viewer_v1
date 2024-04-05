<!--
 * @Author: DemoSting1 1562752074@qq.com
 * @Date: 2024-03-27 22:05:01
 * @LastEditors: DemoSting1 1562752074@qq.com
 * @LastEditTime: 2024-04-02 08:51:55
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
      <img
        class="model-control-button"
        src="/images/放大.png"
        @click="handleZoomInClick"
        style="width: 20px; height: 20px"
      />
      <img
        class="model-control-button"
        src="/images/缩小.png"
        @click="handleZoomOutClick"
        style="width: 20px; height: 20px"
      />
      <div class="split-line">|</div>
      <img
        class="model-control-button"
        src="/images/侧视图.png"
        @click="modelSideViewClick"
        style="width: 20px; height: 20px"
      />
      <img
        class="model-control-button"
        src="/images/俯视图.png"
        @click="modelTopViewClick"
        style="width: 20px; height: 20px"
      />
      <img
        class="model-control-button"
        src="/images/正视图.png"
        @click="modelFrontViewClick"
        style="width: 20px; height: 20px"
      />
      <img
        class="model-control-button"
        src="/images/轴测图.png"
        @click="modelDefaultViewClick"
        style="width: 20px; height: 20px"
      />
      <div class="split-line">|</div>
      <img
        class="model-control-button"
        src="/images/显示.png"
        @click="handleShowModelClick"
        style="width: 20px; height: 20px"
      />
      <img
        class="model-control-button"
        src="/images/隐藏.png"
        @click="handleHideModelClick"
        style="width: 20px; height: 20px"
      />
      <div class="split-line">|</div>
      <img
        class="model-control-button"
        :src="
          modelRectSwitchOn ? modelRectSwitchOffImgUrl : modelRectSwitchOnImgUrl
        "
        @click="switchModelSizeRectClick"
        style="width: 20px; height: 20px"
      />
      <div class="model-color-select-container">
        <img
          class="model-color-button"
          src="/images/颜色.png"
          @click="switchModelSizeRectClick"
          style="width: 24px; height: 24px"
        />
        <ColorButtonList></ColorButtonList>
      </div>
    </div>
    <div id="model-control-button-list-1">
      <img
        class="model-control-button"
        src="/images/问题.png"
        style="width: 20px; height: 20px"
      />
    </div>
  </div>
</template>

<script>
import EventBus from "@/utils/EventBus";
import _ from "lodash";
import { TOYS_MODEL_FILE_LIST_JSON } from "@/constants/constants.js";
import ColorButtonList from "@/components/ColorButtonList/index.vue";

export default {
  name: "ModelViewerHeader",
  components: { ColorButtonList },
  data() {
    return {
      value: "",
      modelRectSwitchOn: false,
      modelRectSwitchOnImgUrl: "/images/矩形外壳.png",
      modelRectSwitchOffImgUrl: "/images/不显示矩形外壳.png",
      options: [TOYS_MODEL_FILE_LIST_JSON],
    };
  },
  watch: {
    value: function (newValue, oldValue) {
      // 在这里可以执行你想要进行的操作
      _.debounce(function () {
        console.log("value changed from " + oldValue + " to " + newValue);
        EventBus.emit("modelSelectedChangedEvent", newValue);
      }, 500)();
    },
  },
  methods: {
    handleZoomInClick: _.debounce(function () {
      EventBus.emit("modelZoomInEvent");
    }, 500),
    handleZoomOutClick: _.debounce(function () {
      EventBus.emit("modelZoomOutEvent");
    }, 500),
    handleShowModelClick: _.debounce(function () {
      EventBus.emit("showModelEvent");
    }, 500),
    handleHideModelClick: _.debounce(function () {
      EventBus.emit("hideModelEvent");
    }, 500),
    switchModelSizeRectClick: _.debounce(function () {
      if (this.modelRectSwitchOn) {
        EventBus.emit("hideModelSizeRectEvent");
        this.modelRectSwitchOn = !this.modelRectSwitchOn;
      } else {
        EventBus.emit("showModelSizeRectEvent");
        this.modelRectSwitchOn = !this.modelRectSwitchOn;
      }
    }, 500),
    modelFrontViewClick: _.debounce(function () {
      EventBus.emit("modelFrontViewEvent");
    }, 500),
    modelSideViewClick: _.debounce(function () {
      EventBus.emit("modelSideViewEvent");
    }, 500),
    modelTopViewClick: _.debounce(function () {
      EventBus.emit("modelTopViewEvent");
    }, 500),
    modelDefaultViewClick: _.debounce(function () {
      EventBus.emit("modelDefaultViewEvent");
    }, 500),
  },
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
  margin-left: auto; /* ! 设置元素靠右显示 */
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
