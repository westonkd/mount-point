import { nodeFromComponentName, propsForComponent } from "../domHelpers";

let originalDomContent;

beforeEach(() => {
  originalDomContent = document.body.innerHTML;
});

afterEach(() => {
  document.body.innerHTML = originalDomContent;
});

describe("when the mount point does not exist", () => {
  describe("nodeFromComponent", () => {
    it("raises MountPointMissing when the component mount point is not found", () => {
      try {
        nodeFromComponentName("Banana");
      } catch (error) {
        expect(error.type).toEqual("MountPointMissing");
      }
    });
  });

  describe("propsForComponent", () => {
    it("raises MountPointMissing when the component mount point is not found", () => {
      try {
        propsForComponent("Banana");
      } catch (error) {
        expect(error.type).toEqual("MountPointMissing");
      }
    });
  });
});

describe("when the mount point does exist", () => {
  const props = { test: "foo" };

  beforeEach(() => {
    document.body.innerHTML =
      "<div id='Banana_mount_point' data-props='{\"foo\":\"bar\"}'></div>";
  });

  describe("nodeFromComponent", () => {
    it("returns the correct node", () => {
      expect(nodeFromComponentName("Banana").id).toEqual("Banana_mount_point");
    });
  });

  describe("propsForComponent", () => {
    it("returns the parsed props", () => {
      expect(propsForComponent("Banana")).toEqual({
        foo: "bar"
      });
    });
  });

  describe("when props are not present", () => {
    beforeEach(() => {
      document.body.innerHTML = "<div id='Banana_mount_point'></div>";
    });

    describe("propsForComponent", () => {
      it("returns the parsed props", () => {
        expect(propsForComponent("Banana")).toEqual({});
      });
    });
  });

  describe("when props not JSON", () => {
    beforeEach(() => {
      document.body.innerHTML =
        "<div id='Banana_mount_point' data-props='\"foo\":\"bar\"}'></div>";
    });

    describe("propsForComponent", () => {
      it("returns the parsed props", () => {
        try {
        } catch (error) {
          expect(error.type).toEqual("InvalidProps");
        }
      });
    });
  });
});
