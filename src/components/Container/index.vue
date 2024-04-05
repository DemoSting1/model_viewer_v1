<!--
 * @Author: DemoSting1 1562752074@qq.com
 * @Date: 2024-03-28 10:58:40
 * @LastEditors: DemoSting1 1562752074@qq.com
 * @LastEditTime: 2024-04-02 08:33:02
 * @FilePath: \model_viewer_v1\src\components\Container\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="common-layout">
    <el-container>
      <el-header> 
        <ModelViewerHeader></ModelViewerHeader> 
      </el-header>
      <el-container>
        <!-- <el-aside width="auto"> 
          <ModelViewerMenu></ModelViewerMenu> 
        </el-aside> -->
        <el-main >
          <ThreeModelViewer></ThreeModelViewer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import ModelViewerHeader from "@/components/Header/index.vue";
import ThreeModelViewer from "@/components/ThreeModelViewer/index.vue";
// import ModelViewerMenu from "@/components/Menu/index.vue";

export default({
    name: "ModelViewerContainer",
    components: {
        ModelViewerHeader,
        ThreeModelViewer,
        // ModelViewerMenu
        
    }
})
</script>

<style scoped>
    .el-main {
        padding: 0px !important;
    }
    .el-header {
        height: auto;
        padding: 0px !important;
    }
</style>