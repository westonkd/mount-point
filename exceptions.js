function MountPointMissing() {
  return {
    message: "Mount point was not found.",
    type: "MountPointMissing"
  };
}

function InvalidProps() {
  return {
    message: "There was an error parsing props from the mount point.",
    type: "InvalidProps"
  };
}

module.exports = {
  MountPointMissing,
  InvalidProps
};
