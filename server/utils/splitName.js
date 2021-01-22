const path = require("path");
const fs = require("fs");

function indexOfExt(name) {
  return name.lastIndexOf(".");
}

function splitAtIndex(name) {
  const index = indexOfExt(name);
  if (index === -1) {
    throw Error("issue with name");
  }
  return [name.substring(0, index), name.substring(index)];
}

function createUniqueName(name) {
  const fileFolder = path.join(
    path.dirname(require.main.filename) + "/repo" + "/"
  );
  const [ante, ext] = splitAtIndex(name);
  let i = 0;
  let finalFileName;
  let fileFullPath;
  do {
    i += 1;
    finalFileName = `${ante} (${i})${ext}`;
    fileFullPath = fileFolder + finalFileName;
  } while (fs.existsSync(fileFullPath));
  return finalFileName;
}

module.exports = { indexOfExt, splitAtIndex, createUniqueName };
