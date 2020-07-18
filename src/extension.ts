
import * as vscode from "vscode";

export function deactivate() { }

function SpaceX() {
	const editorX = vscode.window.activeTextEditor;
	if (editorX && editorX.options.insertSpaces) {
		return " ".repeat(<number>editorX.options.tabSize);
	}
	return "\t";
}

export class CodeActionProvider implements vscode.CodeActionProvider {
	public provideCodeActions(): vscode.Command[] {
		const editorX = vscode.window.activeTextEditor;
		if (!editorX || editorX.selection.isEmpty) {
			return [];
		}
		const pickedText = editorX.document.getText(editorX.selection);

		const codeActions = [];
		if (pickedText !== '') {
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
		}
		return codeActions;
	}
}

function insertSnippet(
	previously: string,
	behind: string,
	spacex: string,
	substitute?: boolean | false,
	obx?: boolean | false
) {
	const editorX = vscode.window.activeTextEditor;

	if (editorX && editorX.selection.start !== editorX.selection.end) {
		var choice = editorX.selection;
		var sonny = editorX.document.getText(choice).trimLeft();
		var line = editorX.document.lineAt(choice.start);
		sonny = sonny.replace(
			new RegExp("\n\\s{" + line.firstNonWhitespaceCharacterIndex + "}", "gm"),
			"\n" + spacex
		);
		if (substitute) {
			if (sonny.substr(-1) === ",") {
				sonny = sonny.substr(0, sonny.length - 1);
				sonny += "";
			}
		}
		else {
			if (sonny.substr(-1) === ",") {
				sonny = sonny.substr(0, sonny.length - 1);
				sonny += ";";
			}
		}
		var replaceSonny = previously + sonny + behind;
		if (
			sonny.substr(-1) === "," ||
			(sonny.substr(-1) === ";" && substitute)
		) {

			if (obx) {
				replaceSonny += ";";
			} else {
				replaceSonny += ",";
			}

		}
		editorX.insertSnippet(new vscode.SnippetString(replaceSonny), choice);
	}
}

export const activate = (context: vscode.ExtensionContext) => {

	context.subscriptions.push(
		vscode.languages.registerCodeActionsProvider(
			{ pattern: "**/*.{dart}", scheme: "file" },
			new CodeActionProvider()
		)
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"get.wrapInGetx",
			() => {
				insertSnippet("GetX<${1:My}Controller>(\n" + SpaceX() + "init: ${1:My}Controller(),\n" + SpaceX() + "initState: (_) {},\n" + SpaceX() + "builder: (_) {\n" + SpaceX() + SpaceX() + "return ", "\n  },\n" + "),", SpaceX(), false, false);
			})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"get.wrapInGetBuilder",
			() => {
				insertSnippet("GetBuilder<${1:My}Controller>(\n" + SpaceX() + "init: ${1:My}Controller(),\n" + SpaceX() + "initState: (_) {},\n" + SpaceX() + "builder: (_) {\n" + SpaceX() + SpaceX() + "return ", "\n  },\n" + "),", SpaceX(), false, false);
			})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"get.wrapInObx",
			() => {
				insertSnippet("Obx(() =>" + " ", "),", SpaceX(), true, true);
			})
	);

};