import React from "react";
import { reactMount } from "../ReactMount";

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

const Goodbye = props => {
  return <div>Goodbye {props.toWhat}</div>;
};

let originalDomContent;

beforeEach(() => {
  originalDomContent = document.body.innerHTML;
});

afterEach(() => {
  document.body.innerHTML = originalDomContent;
});

describe("when the mount point does exist", () => {
  beforeEach(() => {
    document.body.innerHTML =
      "<div id='Hello_mount_point' data-props='{\"toWhat\":\"World\"}'></div>" +
      "<div id='Goodbye_mount_point' data-props='{\"toWhat\":\"World\"}'></div>";
  });

  it("mounts the class component with props", () => {
    reactMount(Hello);
    expect(document.body.innerHTML).toMatch(/<div>Hello World<\/div>/);
  });

  it("mounts pure functional components", () => {
    reactMount(Goodbye);
    expect(document.body.innerHTML).toMatch(/<div>Goodbye World<\/div>/);
  });

  describe("when props are not present", () => {
    beforeEach(() => {
      document.body.innerHTML =
        "<div id='Hello_mount_point'></div>" +
        "<div id='Goodbye_mount_point'></div>";
    });

    it("mounts class components without props", () => {
      reactMount(Hello);
      expect(document.body.innerHTML).toMatch(/<div>Hello <\/div>/);
    });

    it("mounts class components without props", () => {
      reactMount(Goodbye);
      expect(document.body.innerHTML).toMatch(/<div>Goodbye <\/div>/);
    });
  });

  describe("when props not JSON", () => {
    beforeEach(() => {
      document.body.innerHTML =
        "<div id='Hello_mount_point' data-props='\"foo\":\"bar\"}'></div>" +
        "<div id='Goodbye_mount_point' data-props='\"foo\":\"bar\"}'></div>";
    });

    it("raises an exception for class components", () => {
      try {
        reactMount(Hello);
      } catch (error) {
        expect(error.type).toEqual("InvalidProps");
      }
    });

    it("raises an exception for class components", () => {
      try {
        reactMount(Goodbye);
      } catch (error) {
        expect(error.type).toEqual("InvalidProps");
      }
    });
  });
});
