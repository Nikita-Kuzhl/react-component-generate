import { Uri, window, workspace } from "vscode";
import * as fs from "fs";
import { indexFuncTemp, reactFuncTemp, styleTemp } from "./tempates";

const writeFile = async (path: string, content: string) => {
  return workspace.fs.writeFile(
    Uri.file(path),
    new Uint8Array(Buffer.from(content))
  );
};

const directoryToAddComponent = (uri: Uri, name: string) => {
  const { path } = uri;
  const newPath = path + "/" + name;
  fs.mkdirSync(newPath);
  return newPath;
};

const writeFiles = async (name: string, directory: string) => {
  writeFile(`${directory}/index.ts`, indexFuncTemp(name));
  writeFile(`${directory}/${name}.tsx`, reactFuncTemp(name));
  writeFile(`${directory}/${name}.module.scss`, styleTemp());
};

const generateComponent = async (uri?: Uri) => {
  if (!uri) {
    return window.showErrorMessage("No path found");
  }
  const componentName = await window.showInputBox({
    prompt: "Component name",
  });
  if (!componentName || !componentName.length) {
    return window.showErrorMessage("Invalid name");
  }
  const directory = await directoryToAddComponent(uri, componentName);
  writeFiles(componentName, directory);
};
export default generateComponent;
