import * as vscode from "vscode";
import {SpaceX} from "./utils/space";
import {CodeActionProvider} from "./utils/code_action";
import {insertSnippet} from "./utils/insert_snippet";

export function deactivate() { }

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
				insertSnippet("GetX<${1:My}Controller>(\n" + SpaceX() + "init: ${1:My}Controller(),\n" + SpaceX() + "initState: (_) {},\n" + SpaceX() + "builder: (_) {\n" + SpaceX() + SpaceX() + "return ", "; \n  },\n" + ")", SpaceX(), false, false);

				vscode.window.setStatusBarMessage("Wrap Successfully Created", 2000);
			})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"get.wrapInGetBuilder",
			() => {
				insertSnippet("GetBuilder<${1:My}Controller>(\n" + SpaceX() + "init: ${1:My}Controller(),\n" + SpaceX() + "initState: (_) {},\n" + SpaceX() + "builder: (_) {\n" + SpaceX() + SpaceX() + "return ", "; \n  },\n" + ")", SpaceX(), false, false);

				vscode.window.setStatusBarMessage("Wrap Successfully Created", 2000);
			})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"get.wrapInObx",
			() => {
				insertSnippet("Obx(() =>" + " ", ")", SpaceX(), true, true);

				vscode.window.setStatusBarMessage("Wrap Successfully Created", 2000);

			})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(
			"get.removeKey",
			() => {

				vscode.window.showWarningMessage('You can now use the lamp by clicking on the name of the widget. The shortcut keys have been disabled.', ...['OK', 'Readme Snippets'])
					.then(selection => {
					  if (selection === "Readme Snippets") {
						vscode.env.openExternal(vscode.Uri.parse(
							'https://marketplace.visualstudio.com/items?itemName=get-snippets.get-snippets'));
					  }
					});

			})
	);
	

};
