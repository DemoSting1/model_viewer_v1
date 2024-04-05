<template>
  <div class="canvas-container">
    <div ref="container"></div>
    <!-- <ColorSelectButton @colorSelected="handleColorSelected"></ColorSelectButton> -->
  </div>
</template>

<script>
import * as THREE from "three";
import { LDrawLoader } from "three/examples/jsm/loaders/LDrawLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { PMREMGenerator } from "three/src/extras/PMREMGenerator.js";
// import ColorSelectButton from "@/components/ColorSelectButton/index.vue";
// import ListComponent from "@/components/ListComponent/index.vue";
// import ButtonList from "@/components/ButtonList/index.vue";
import TWEEN from "@tweenjs/tween.js";
// WEBGL_PARAMS, 
import { TOYS_MODEL_FILE_LIST_JSON } from "@/constants/constants.js";
import { zoomIn, zoomOut } from "./ThreeElements/controls/controls.js"
import { initCamera, setFrontView, setSideView, setTopView, setDefaultView, cameraPositionAndLookAt } from "./ThreeElements/camera/camera.js";
import { initContols } from "./ThreeElements/controls/controls.js"
import { clearModel } from "./ThreeElements/scene/scene.js";
import { hideModel, showModel, createModelSizeRect, hideModelSizeRect } from "./ThreeElements/geometry/geometry.js"
import EventBus from "@/utils/EventBus.js"
//scene 或者 mesh 变量不要在data(){ }中定义，而是要定义成全局变量，可以解决：
// 【TypeError: 'get' on proxy: property 'modelViewMatrix' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual value ...】

let scene;
let pmremGenerator;
let controls;
let progressBarDiv;

export default {
  name: "ThreeModelViewer",
  data() {
    return {
      renderer: null,
      modelSize: new THREE.Vector3(0, 0, 0),
      modelUrl: "/" + TOYS_MODEL_FILE_LIST_JSON.models[0].value
    };
  },
  components: {
    // ColorSelectButton,
  },
  mounted() {
    this.init();
    this.loadModel(this.modelUrl);
    this.animate();
    EventBus.on('modelZoomInEvent', () => {
      if (controls) { // 解决controls没有挂载问题
        zoomIn(controls)
      }
    })
    EventBus.on('modelZoomOutEvent', () => {
      if (controls) { // 解决controls没有挂载问题
        zoomOut(controls)
      }
    })
    EventBus.on('showModelEvent', () => {
      showModel(scene)
    })
    EventBus.on('hideModelEvent', () => {
      hideModel(scene)
    })
    // 展示模型的矩形外框
    EventBus.on('showModelSizeRectEvent', () => {
      createModelSizeRect(scene)
    })
    // 关闭模型矩形外框
    EventBus.on('hideModelSizeRectEvent', () => {
      hideModelSizeRect(scene)
    })
    EventBus.on('modelSelectedChangedEvent', (url) => {
      this.modelUrl = url
      this.loadModel(this.modelUrl)
    })
    EventBus.on('modelFrontViewEvent', () => {
      setFrontView(this.camera)
    })
    EventBus.on('modelSideViewEvent', () => {
      setSideView(this.camera)
    })
    EventBus.on('modelTopViewEvent', () => {
      setTopView(this.camera)
    })
    EventBus.on('modelDefaultViewEvent', () => {
      setDefaultView(this.camera)
    })
  },
  watch() {
    controls
  },
  methods: {
    init() {
      // 创建场景
      scene = new THREE.Scene();
      scene.background = new THREE.Color("transparent");

      // antialias: true 表示开启抗锯齿功能，使得渲染的图像更加平滑。
      this.renderer = new THREE.WebGLRenderer({ antialias: true, depth: true });
      // 设置渲染器的像素比例 devicePixelRatio 可以保证渲染出的图像在高分辨率屏幕上显示更清晰。
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      // ACES Filmic 色调映射算法
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.$refs.container.appendChild(this.renderer.domElement);

      // 创建环境(必须要放到 ) renderer 初始化的后面，否则会报错
      const roomEnvironment = new RoomEnvironment(this.renderer);
      pmremGenerator = new PMREMGenerator(this.renderer);
      scene.environment = pmremGenerator.fromScene(roomEnvironment).texture;

      // 进度条
      progressBarDiv = document.createElement("div");
      progressBarDiv.innerText = "Loading...";
      progressBarDiv.style.fontSize = "3em";
      progressBarDiv.style.color = "#888";
      progressBarDiv.style.display = "block";
      progressBarDiv.style.position = "absolute";
      progressBarDiv.style.top = "50%";
      progressBarDiv.style.width = "100%";
      progressBarDiv.style.textAlign = "center";

      this.camera = initCamera()
      controls = initContols(this.camera, this.renderer.domElement)
    },
    loadModel(path, modelType="mpd") {
      let loader;
      switch (modelType) {
        case "obj":
          loader = new OBJLoader();
          break;
        case "mpd":
          loader = new LDrawLoader();
          break;
        case "gltf":
          loader = new GLTFLoader();
          break;
        default:
          console.error("Unsupported model type");
          return;
      }
      loader.load(
        path,
        (object3d) => {
          if (object3d instanceof THREE.Object3D) {
            object3d.rotation.set(-Math.PI, 0, 0); // z-up conversion
            
            const selectedObject = TOYS_MODEL_FILE_LIST_JSON.models.find(model => model.value === path.slice(0));
            console.log("selectedObject", path.slice(1))
            if (selectedObject && selectedObject.yStep) {
              object3d.position.y += selectedObject.yStep;
            }
            object3d.traverse(function (child) {
              child.castShadow = true; // 开启阴影投射
              if (child.material) {
                child.material.depthTest = true; // 开启材质的深度测试
              }
            });
            clearModel(scene);
            scene.add(object3d);
            cameraPositionAndLookAt(this.camera, scene)
          } else {
            console.error(
              "Error: loaded object is not an instance of THREE.Object3D"
            );
          }
        },
        undefined,
        (error) => {
          console.error("Error loading model", error);
        }
      );
    },
    /**
     * 清除顶点数据为 NaN 的值
     */
    cleanVertexData(object3d) {
      object3d.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          const positions = child.geometry.attributes.position.array;

          for (let i = 0; i < positions.length; i++) {
            if (isNaN(positions[i])) {
              positions[i] = 0; // 将 NaN 值替换为 0 或其他默认合适值
            }
          }
        }
      });
    },

    
    /**
     * 点击选中模型的构件
     * @param {*} event
     */
    onMouseClick(event) {
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
      // 射线投射器对象
      const raycaster = new THREE.Raycaster();
      // 将鼠标坐标和相机对象关联起来，生成一条从相机位置出发的射线
      raycaster.setFromCamera(mouse, this.camera);
      // 将生成的射线和场景中的物体进行相交检测
      // scene.children 表示对场景中的所有子对象进行相交检测
      // 参数 true 表示递归检测所有子对象的子对象
      const intersects = raycaster.intersectObjects(scene.children, true);
      if (intersects.length > 0) {
        // 判断是否有物体与射线相交
        const intersectedObject = intersects[0].object; //  获取与射线相交的第一个物体
        this.highlightObject(intersectedObject);
      }
    },
    /**
     * 高亮选中的模型的构件
     * @param {*} object
     */
    highlightObject(object) {
      this.restoreHighlightedObject();
      const originalMaterial = object.material; // 保存物体原始的材质
      // 创建一个新的基础网格材质，颜色设置为红色，用于高亮显示物体。
      const highlightedMaterial = new THREE.MeshStandardMaterial({
        color: 0x0000ff,
      });
      object.material = highlightedMaterial;
      object.userData.originalMaterial = originalMaterial;
      console.log(this.getIntroText(object.userData));
    },
    /**
     * 恢复到原来的颜色
     */
    restoreHighlightedObject() {
      scene.traverse((object) => {
        if (object.userData.originalMaterial) {
          object.material = object.userData.originalMaterial;
          delete object.userData.originalMaterial;
        }
      });
    },
    /**
     * 展示每个子模型的介绍（可以用于3D模型的讲解）
     * @param {*} object
     */
    getIntroText(object) {
      // 根据需要，根据对象返回相应的介绍文字
      if (object.originalMaterial && object.originalMaterial.name) {
        return object.originalMaterial.name;
      } else {
        return "No description available.";
      }
    },
    /**
     * 改变模型颜色
     */
    changeModelColor(hexColor) {
      let _color = new THREE.Color("#" + hexColor);
      let restoreColor = false;
      let maxUsedColor = this.findMostUsedColor(scene);
      // 每次改变颜色前，需要先将高亮的部位都复原
      this.restoreHighlightedObject();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          let objectHexColor = object.material.color.getHexString();
          console.log({ maxUsedColor, objectHexColor, hexColor, _color });
          if (object.userData.originalMaterial) {
            // 如果物体有保存的原始材质，则恢复原始材质
            if (objectHexColor == hexColor) {
              // 如果物体颜色与要切换的颜色相同，则恢复原始颜色
              restoreColor = true;
            }
          } else if (objectHexColor == maxUsedColor) {
            object.userData.originalMaterial = object.material.clone();
            const newMaterial = object.material.clone();
            newMaterial.color = _color; // 只改变材质的颜色，不改变其他属性
            object.material = newMaterial;
          }
        }
      });

      // 是否恢复原来的模型颜色
      if (restoreColor) {
        this.restoreHighlightedObject();
      }
    },
    /**
     * 监听 ColorSelectButton 组件的颜色选择事件
     * @param {*} color
     */
    handleColorSelected(color) {
      this.changeModelColor(color);
    },
    findMostUsedColor(scene) {
      const colorCount = {};

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          const material = object.material;
          const color = material.color.getHexString(); // 获取材质的颜色，转换为十六进制字符串
          if (color in colorCount) {
            colorCount[color]++;
          } else {
            colorCount[color] = 1;
          }
        }
      });

      let mostUsedColor = null;
      let maxCount = 0;

      for (const color in colorCount) {
        if (colorCount[color] > maxCount) {
          mostUsedColor = color;
          maxCount = colorCount[color];
        }
      }

      return mostUsedColor;
    },
    /**
     * 展开模型
     * @param {*} object3d
     */
    explodeModelAlongCenterLines(object3d) {
      const explosionCenter = new THREE.Vector3();
      const box = new THREE.Box3().setFromObject(object3d);
      box.getCenter(explosionCenter);

      object3d.traverse((node) => {
        if (node.type === "Mesh") {
          let subBox = new THREE.Box3().setFromObject(node);
          let meshCenter = subBox.getCenter(new THREE.Vector3());
          // 爆炸方向为子 Mesh 中心指向整个模型的中心
          let explodeDirection = explosionCenter
            .clone()
            .sub(meshCenter)
            .normalize();

          let animationDuration = 5; // 爆炸动画持续时间
          let explosionDistance = 100; // 爆炸距离

          let targetPosition = meshCenter
            .clone()
            .add(explodeDirection.multiplyScalar(explosionDistance));

          new TWEEN.Tween(node.position)
            .to(targetPosition, animationDuration * 1000)
            .easing(TWEEN.Easing.Quadratic.In)
            .start();
        }
      });
    },
    animate() {
      requestAnimationFrame(this.animate);
      controls.update() 
      TWEEN.update();
      this.renderer.render(scene, this.camera);
    },
  },
  beforeUnmount() {
    // 清除动画帧
    cancelAnimationFrame(this.animate);
  },
};
</script>

<style>
.canvas-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
