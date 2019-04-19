function MountPointMissing(name = "") {
  return {
    message: `Mount point was not found for ${name}.`,
    type: "MountPointMissing"
  };
}

function InvalidProps(name = "") {
  return {
    message: `There was an error parsing props from the mount point (${name}).`,
    type: "InvalidProps"
  };
}

module.exports = {
  MountPointMissing,
  InvalidProps
};
