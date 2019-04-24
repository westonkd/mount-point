import { nodeFromComponentName, propsForComponent } from "./shared/domHelpers";

const React = require("react");
const render = require("react-dom").render;

export function reactMount(component) {
  const name = componentName(component);
  const mountPoint = nodeFromComponentName(name);
  const props = propsForComponent(name);

  render(React.createElement(component, props, null), mountPoint);
}

function componentName(component) {
  return component.displayName || component.name || "error";
}
