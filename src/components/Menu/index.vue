<!--
 * @Author: DemoSting1 1562752074@qq.com
 * @Date: 2024-03-27 22:22:31
 * @LastEditors: DemoSting1 1562752074@qq.com
 * @LastEditTime: 2024-03-28 21:06:45
 * @FilePath: \model_viewer_v1\src\components\Menu\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="true"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>        
          <img class="model-control-button" src="/images/模型架构.png" style="width: 20px;height: 20px;">
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon>        
        <img class="model-control-button" src="/images/颜色.png" style="width: 24px;height: 24px;">
      </el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>        
        <img class="model-control-button" src="/images/resize.png" style="width: 26px;height: 26px;">
      </el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4" disabled>
      <el-icon>        
        <img class="model-control-button" src="/images/模型架构.png" style="width: 20px;height: 20px;">
      </el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "ModelViewerMenu",
  components: {
   
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo {
    height: calc(100% - 60px);
    border: none;
}
</style>
