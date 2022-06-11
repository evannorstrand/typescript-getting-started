import path, { resolve as _resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const entry = "./src/index.ts";
export const devtool = "inline-source-map";
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
  ],
};
export const resolve = {
  extensions: [".tsx", ".ts", ".js"],
};
export const output = {
  filename: "bundle.js",
  path: _resolve(__dirname, "dist"),
};
