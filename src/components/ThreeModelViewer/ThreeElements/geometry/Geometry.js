export function generateModelSkeleton() {
  // 定义一个用于存储模型数据的变量
  let modelData = {
    label: "模型名称",
    models: [],
  };

  let model = {
    value: path, // 这里可以根据实际情况设置模型的 value
    label: "模型名称",
    children: [],
  };

  obj.traverse((child) => {
    let childModel = {
      value: path, // 这里可以根据实际情况设置子模型的 value
      label: "模型名称",
      children: [],
    };

    // 如果模型的 mesh 还包含子 mesh
    if (child.children.length > 0) {
      child.children.forEach((subChild) => {
        childModel.children.push({
          value: path, // 这里可以根据实际情况设置子模型的 value
          label: "模型名称",
          children: [],
        });
      });
    }

    model.children.push(childModel);
  });

  modelData.models.push(model);
}
