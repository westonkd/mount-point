import { MountPointMissing, InvalidProps } from "../../exceptions";

function nodeFromComponentName(componentName) {
  const node = document.getElementById(`${componentName}_mount_point`);

  if (node) {
    return node;
  }

  throw MountPointMissing();
}

function propsForComponent(componentName) {
  const node = nodeFromComponentName(componentName);

  try {
    return JSON.parse(node.getAttribute("data-props")) || {};
  } catch (e) {
    throw InvalidProps();
  }
}

module.exports = {
  nodeFromComponentName,
  propsForComponent
};
