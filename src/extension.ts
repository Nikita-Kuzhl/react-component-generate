import * as vscode from "vscode";
import generateComponent from "./generateComponent";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "rcg" is now active!');
  const generateComponentCommand = vscode.commands.registerCommand(
    "rcg.createComponent",
    generateComponent
  );
  context.subscriptions.push(generateComponentCommand);
}

export function deactivate() {}
