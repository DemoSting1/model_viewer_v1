<template>
    <div class="common-layout">
    <el-container>
      <el-header> 
        <ModelViewerHeader></ModelViewerHeader> 
      </el-header>
      <el-container>
        <el-aside width="auto"> 
          <ModelViewerMenu></ModelViewerMenu> 
        </el-aside>
        <el-main >
          <ThreeModelViewer></ThreeModelViewer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import ModelViewerHeader from "@/components/Header/index.vue";
import ModelViewerMenu from "@/components/Menu/index.vue";
import ThreeModelViewer from "@/components/ThreeModelViewer/index.vue";

export default({
    name: "ModelViewerContainer",
    components: {
        ModelViewerHeader,
        ModelViewerMenu,
        ThreeModelViewer
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