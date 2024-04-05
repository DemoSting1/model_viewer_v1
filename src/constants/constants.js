/*
 * @Author: DemoSting1 1562752074@qq.com
 * @Date: 2024-03-28 21:12:50
 * @LastEditors: DemoSting1 1562752074@qq.com
 * @LastEditTime: 2024-04-05 09:57:45
 * @FilePath: \model_viewer_v1\src\constants\constants.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const MODEL_COLORS = {
  RED: "c91a09",
  GREEN: "00ff00",
};

export const WEBGL_PARAMS = {
  // 相机位置参数
  THREE_CAMERA_POSITION: {
    initPosition: [-100, 60, 120],
    frontView: [],
    topView:[],
    sideView: []
  }
};

// 玩具模型文件列表
export const TOYS_MODEL_FILE_LIST = {
  "小汽车": "models/car.ldr_Packed.mpd",
  "月球车": "models/1621-1-LunarMPVVehicle.mpd_Packed.mpd",
  "雷达卡车": "models/889-1-RadarTruck.mpd_Packed.mpd",
  "拖车": "models/4838-1-MiniVehicles.mpd_Packed.mpd",
  "推土机": "models/4915-1-MiniConstruction.mpd_Packed.mpd",
  "直升机": "models/4918-1-MiniFlyers.mpd_Packed.mpd",
  "飞机": "models/5935-1-IslandHopper.mpd_Packed.mpd",
  "灯塔": "models/30023-1-Lighthouse.ldr_Packed.mpd",
  "X-Wing mini": "models/30051-1-X-wingFighter-Mini.mpd_Packed.mpd",
  "AT-ST mini": "models/30054-1-AT-ST-Mini.mpd_Packed.mpd",
  "AT-AT mini": "models/4489-1-AT-AT-Mini.mpd_Packed.mpd",
  "AT-ST": "models/10174-1-ImperialAT-ST-UCS.mpd_Packed.mpd",
  "公共汽车": "models/4494-1-Imperial Shuttle-Mini.mpd_Packed.mpd",
  "拦截机": "models/6965-1-TIEIntercep_4h4MXk5.mpd_Packed.mpd",
  "明星战斗机": "models/6966-1-JediStarfighter-Mini.mpd_Packed.mpd",
  "X-Wing": "models/7140-1-X-wingFighter.mpd_Packed.mpd",
};

export const TOYS_MODEL_FILE_LIST_JSON = {
  label: "Toy models",
  models: [
    { value: "models/car.ldr_Packed.mpd", label: "小汽车" },
    { value: "models/1621-1-LunarMPVVehicle.mpd_Packed.mpd", label: "月球车" },
    { value: "models/889-1-RadarTruck.mpd_Packed.mpd", label: "雷达卡车" },
    { value: "models/4838-1-MiniVehicles.mpd_Packed.mpd", label: "拖车" },
    { value: "models/4915-1-MiniConstruction.mpd_Packed.mpd", label: "推土机" },
    { value: "models/4918-1-MiniFlyers.mpd_Packed.mpd", label: "直升机" },
    { value: "models/30023-1-Lighthouse.ldr_Packed.mpd", label: "灯塔", yStep: -100 },
    {
      value: "models/30051-1-X-wingFighter-Mini.mpd_Packed.mpd",
      label: "X-Wing mini",
    },
    { value: "models/30054-1-AT-ST-Mini.mpd_Packed.mpd", label: "AT-ST mini", yStep: 40 },
    {
      value: "models/4494-1-Imperial Shuttle-Mini.mpd_Packed.mpd",
      label: "公共汽车",
    },
    {
      value: "models/6965-1-TIEIntercep_4h4MXk5.mpd_Packed.mpd",
      label: "拦截机",
      yStep: 50
    },
    {
      value: "models/6966-1-JediStarfighter-Mini.mpd_Packed.mpd",
      label: "明星战斗机",
    },
  ],
};


