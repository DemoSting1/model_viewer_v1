<!--
 * @Author: DemoSting1 1562752074@qq.com
 * @Date: 2024-04-02 08:48:33
 * @LastEditors: DemoSting1 1562752074@qq.com
 * @LastEditTime: 2024-04-02 08:53:59
 * @FilePath: \model_viewer_v1\src\components\ColorButtonList\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="button-list-container">
      <div
        class="button-container"
        v-for="(value, index) in buttonList"
        :key="index"
      >
        <img class="button-icon" :src="value"/>
      </div>
    </div>
  </template>
  
  <script>
  import { MODEL_COLORS } from "/src/constants/constants.js";
  
  export default {
    name: "ColorButtonList",
    data() {
      return {
        buttonList: MODEL_COLORS,
      };
    },
    methods: {
      selectColor(color) {
        this.$emit("colorSelected", color);
      },
    },
  };
  </script>
  
  <style>
  .button-list-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }
  
  .button-icon {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    cursor: pointer;
  }
  </style>
  