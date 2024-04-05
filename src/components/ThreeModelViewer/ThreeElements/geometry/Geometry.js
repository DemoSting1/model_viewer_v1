import * as THREE from "three";

/**
 * 控制模型的隐藏
 * @param {*} scene 场景对象
 */
export function hideModel(scene) {
  scene.traverse(function (child) {
    if (child instanceof THREE.Mesh) {
      scene.visible = false;
    }
  });
}

/**
 * 控制模型的显示
 * @param {*} scene 场景对象
 */
export function showModel(scene) {
  scene.traverse(function (child) {
    if (child instanceof THREE.Mesh) {
      scene.visible = true;
    }
  });
}

/**
 * 给模型添加一个矩形外框,用来标识尺寸
 * @param {*} scene 场景对象
 */
let modelSizeRectangle = null;
export function createModelSizeRect(scene) {
  scene.children.forEach((child) => {
    if (child.isObject3D) {
      // 获取模型的包围盒信息
      const box = new THREE.Box3().setFromObject(child);
      const size = new THREE.Vector3();
      box.getSize(size);

      // 计算模型的长宽高
      const width = size.x;
      const height = size.y;
      const depth = size.z;

      const boxCenter = new THREE.Vector3();
      box.getCenter(boxCenter);
      // 模型的中心位置
      const modelCenter = boxCenter.clone();

      // 创建表示中心点的几何体
      const sphereGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
      });
      const centerPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

      // 将中心点添加到场景中
      centerPoint.position.copy(modelCenter);
      scene.add(centerPoint);

      // 创建透明材质
      const material = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.1,
        depthTest: true,
        depthWrite: false, // 注意开启深度测试的同时，这里的深度写入也要关闭，否则会出现半透明模型消失的问题
      });

      // 创建立方体几何体
      const geometry = new THREE.BoxGeometry(width, height, depth);
      if (modelSizeRectangle == null) {
        // 创建立方体网格对象
        modelSizeRectangle = new THREE.Mesh(geometry, material);
        // 设置矩形的位置为模型的中心位置
        modelSizeRectangle.position.copy(modelCenter);
        // 将矩形添加到场景中
        scene.add(modelSizeRectangle);
      }
    }
  });
}

/**
 * 删除模型矩形框
 * @param {*} scene 场景对象
 */
export function hideModelSizeRect(scene) {
  if (modelSizeRectangle) {
    // 从场景中移除矩形对象
    scene.remove(modelSizeRectangle);
    // 释放矩形对象的内存
    modelSizeRectangle.geometry.dispose();
    modelSizeRectangle.material.dispose();
    modelSizeRectangle = null;
  }
}

/**
 * 获取模型的中心点
 * @param {*} object3d - 模型对象
 * @returns 
 */
export function getModelCenter(object3d) {
    const explosionCenter = new THREE.Vector3();
    const box = new THREE.Box3().setFromObject(object3d);
    box.getCenter(explosionCenter);
    return explosionCenter
}

/**
 *
 * @param {*} start
 * @param {*} end
 */
export function createRuler(scene, start, end) {
  const points = [start, end];
  const material = new THREE.LineBasicMaterial({
    color: 0xffffff,
    depthTest: true,
    depthWrite: true,
  });
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);
  scene.add(line);
}
