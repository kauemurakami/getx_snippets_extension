import * as vscode from "vscode";

export function SpaceX() {
	const editorX = vscode.window.activeTextEditor;
	if (editorX && editorX.options.insertSpaces) {
		return " ".repeat(<number>editorX.options.tabSize);
	}
	return "\t";
}