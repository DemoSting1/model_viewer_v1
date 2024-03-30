/*
 * @Author: DemoSting1 1562752074@qq.com
 * @Date: 2024-03-29 09:04:35
 * @LastEditors: DemoSting1 1562752074@qq.com
 * @LastEditTime: 2024-03-29 10:09:52
 * @FilePath: \model_viewer_v1\src\components\ThreeModelViewer\ThreeElements\controls\controls.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 放大模型
 * @param {*} controls  OrbitControls 对象
 * @param {*} deltaY 正整数，滚轮滚动的幅度（150）
 */
export function zoomIn (controls, deltaY=150) {
    controls.onMouseWheel(
        new WheelEvent("wheel", {
          deltaY: -deltaY,
        })
      );
}

/**
 * 缩小模型
 * @param {*} controls 
 * @param {*} deltaY 正整数，滚轮滚动的幅度（150）
 */
export function zoomOut (controls, deltaY=150) {
    controls.onMouseWheel(
        new WheelEvent("wheel", {
          deltaY: deltaY,
        })
      );
}