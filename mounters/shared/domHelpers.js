import { MountPointMissing, InvalidProps } from "../../exceptions";

export function nodeFromComponentName(componentName) {
  const node = document.getElementById(`${componentName}_mount_point`);

  if (node) {
    return node;
  }

  throw MountPointMissing(componentName);
}

export function propsForComponent(componentName) {
  const node = nodeFromComponentName(componentName);

  try {
    return JSON.parse(node.getAttribute("data-props")) || {};
  } catch (e) {
    throw InvalidProps(componentName);
  }
}
