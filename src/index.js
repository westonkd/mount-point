import { UnknownFramework } from "./exceptions";
import { reactMount } from "./mounters/ReactMount";

export default function mount(component, type = "react") {
  if (type === "react") {
    reactMount(component);
  } else {
    throw UnknownFramework(type);
  }
}
