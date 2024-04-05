/**
 * 清空Scene中的模型
 */
export function clearModel(scene) {
    scene.children.forEach(child => {
        if (child.isObject3D) {
            scene.remove(child);
        }
    });
}