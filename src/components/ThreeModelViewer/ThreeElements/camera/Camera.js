/*
 * @Author: DemoSting1 1562752074@qq.com
 * @Date: 2024-03-29 09:02:17
 * @LastEditors: DemoSting1 1562752074@qq.com
 * @LastEditTime: 2024-04-01 21:55:35
 * @FilePath: \model_viewer_v1\src\components\ThreeModelViewer\ThreeElements\camera\Camera.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as THREE from "three";

let modelSize = 0;
let modelCenter = null;
export function initCamera() {
  // 设置相机位置
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    2500
  );
  return camera;
}

/**
 * 设置相机的位置
 * @param {*} camera
 */
function cameraPositionCopyCenter(camera) {
  camera.position.copy(modelCenter);
}

/**
 * 设置相机的位置和视点
 * @param {*} camera
 * @param {*} scene
 */
export function cameraPositionAndLookAt(camera, scene) {
  scene.children.forEach((child) => {
    if (child.isObject3D) {
      modelCenter = new THREE.Vector3();
      // 计算模型的包围盒
      var box = new THREE.Box3().setFromObject(child);
      // 计算包围盒的中心点
      box.getCenter(modelCenter);
      // 计算模型最大尺寸
      modelSize = box.getSize(new THREE.Vector3()).length();
      cameraPositionCopyCenter(camera);
      camera.position.x -= modelSize / 1.0;
      camera.position.y += modelSize / 3.0;
      camera.position.z += modelSize * 1;
      // 设置相机目标点
      camera.lookAt(modelCenter);
    }
  });
}

/**
 * 正视图
 * @param {*} camera
 */
export function setFrontView(camera) {
  cameraPositionCopyCenter(camera);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z += modelSize * 1;
}

/**
 * 侧视图
 * @param {*} camera
 */
export function setSideView(camera) {
  cameraPositionCopyCenter(camera);
  camera.position.x -= modelSize;
  camera.position.z = 0;
  camera.position.y = 0;
}

/**
 * 俯视图
 * @param {*} camera
 */
export function setTopView(camera) {
  cameraPositionCopyCenter(camera);
  camera.position.x = 0;
  camera.position.z = 0;
  camera.position.y += modelSize;
}

/**
 * 设置默认视角
 * @param {*} camera
 */
export function setDefaultView(camera) {
  cameraPositionCopyCenter(camera);
  camera.position.x -= modelSize / 1.0;
  camera.position.y += modelSize / 3.0;
  camera.position.z += modelSize * 1;
}
