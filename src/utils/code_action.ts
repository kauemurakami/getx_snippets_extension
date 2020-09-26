
import * as vscode from "vscode";

export class CodeActionProvider implements vscode.CodeActionProvider {
	public provideCodeActions(): vscode.Command[] {
		const editorX = vscode.window.activeTextEditor;

		if (!editorX) {
			return [];
		}
		//const pickedText = editorX.document.getText(selected(editorX));

		var verText = editorX.document.getText(editorX.selection).length;

		const codeActions = [];
		if (verText === 0) {
			codeActions.push({
				command: "get.wrapInGetx",
				title: "Wrap with GetX"
			});
			codeActions.push({
				command: "get.wrapInGetBuilder",
				title: "Wrap with GetBuilder"
			});
			codeActions.push({
				command: "get.wrapInObx",
				title: "Wrap with Obx"
			});		
		} else {
			codeActions.push({
				command: "get.removeKey",
				title: "Wrap with GetX"
			});
			codeActions.push({
				command: "get.removeKey",
				title: "Wrap with GetBuilder"
			});
			codeActions.push({
				command: "get.removeKey",
				title: "Wrap with Obx"
			});			
			
		}
		return codeActions;
	}
}