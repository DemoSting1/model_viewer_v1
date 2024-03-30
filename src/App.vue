<!--
 * @Author: DemoSting1 1562752074@qq.com
 * @Date: 2024-03-27 21:40:46
 * @LastEditors: DemoSting1 1562752074@qq.com
 * @LastEditTime: 2024-03-28 11:43:06
 * @FilePath: \model_viewer_v1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ModelViewerContainer></ModelViewerContainer>
</template>

<script>

import ModelViewerContainer from "@/components/Container/index.vue";


export default {
  name: "App",
  components: {
    ModelViewerContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}
</style>
