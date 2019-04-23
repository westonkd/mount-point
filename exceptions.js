export function MountPointMissing(name = "") {
  return {
    message: `Mount point was not found for ${name}.`,
    type: "MountPointMissing"
  };
}

export function InvalidProps(name = "") {
  return {
    message: `There was an error parsing props from the mount point (${name}).`,
    type: "InvalidProps"
  };
}

export function UnknownFramework(name = "") {
  return {
    message: `MountPoint does not know how to mount ${name} components`,
    type: "UnknownFramework"
  };
}
