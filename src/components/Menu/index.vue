<!--
 * @Author: DemoSting1 1562752074@qq.com
 * @Date: 2024-03-27 22:22:31
 * @LastEditors: DemoSting1 1562752074@qq.com
 * @LastEditTime: 2024-04-02 08:43:51
 * @FilePath: \model_viewer_v1\src\components\Menu\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="true"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>        
          <img class="model-control-button" src="/images/颜色.png" style="width: 24px;height: 24px;">
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">ite</el-menu-item>
        <el-menu-item index="1-2">ite</el-menu-item>
        <el-menu-item index="1-3">ite</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {
  name: "ModelViewerMenu",
  components: {
   
  },
  methods:{
    
  }
};
</script>

<style>
.el-menu-vertical-demo {
    height: calc(100% - 60px);
    border: none;
}
</style>
