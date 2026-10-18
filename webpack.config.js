"use strict";

const path = require("path");

module.exports = {
  mode: "production",
  context: path.resolve(__dirname),
  entry: "./src/index.js",
  output: {
    library: "filbert",
    libraryTarget: "umd",
    globalObject: "this",
    filename: "skulpty.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
};
