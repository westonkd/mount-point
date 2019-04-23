import { nodeFromComponentName, propsForComponent } from "./shared/domHelpers";
import React from "react";
import { render } from "react-dom";

function reactMount(component) {
  const name = componentName(component);
  const mountPoint = nodeFromComponentName(name);
  const props = propsForComponent(name);

  render(React.createElement(component, props, null), mountPoint);
}

function componentName(component) {
  return component.displayName || component.name || "error";
}

module.exports = {
  reactMount
};
