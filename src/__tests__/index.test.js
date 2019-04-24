import mount from "../index";
import { UnknownFramework } from "../exceptions";
import { reactMount } from "../mounters/ReactMount";

jest.mock("../mounters/ReactMount");

describe("when the component type is known", () => {
  afterEach(() => {
    reactMount.mockReset();
  });

  it("mounts the component", () => {
    expect(() => {
      mount("Hello");
    }).not.toThrowError();
  });
});

describe("when the component type is not known", () => {
  afterEach(() => {
    reactMount.mockReset();
  });

  it("raises an exception", () => {
    expect(() => {
      mount("Hello", "vue");
    }).toThrowError(UnknownFramework("vue"));
  });
});
