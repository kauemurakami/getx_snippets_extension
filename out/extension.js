"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = exports.deactivate = void 0;
const vscode = require("vscode");
const space_1 = require("./utils/space");
const code_action_1 = require("./utils/code_action");
const insert_snippet_1 = require("./utils/insert_snippet");
function deactivate() { }
exports.deactivate = deactivate;
exports.activate = (context) => {
    context.subscriptions.push(vscode.languages.registerCodeActionsProvider({ pattern: "**/*.{dart}", scheme: "file" }, new code_action_1.CodeActionProvider()));
    context.subscriptions.push(vscode.commands.registerCommand("get.wrapInGetx", () => {
        insert_snippet_1.insertSnippet("GetX<${1:My}Controller>(\n" + space_1.SpaceX() + "init: ${1:My}Controller(),\n" + space_1.SpaceX() + "initState: (_) {},\n" + space_1.SpaceX() + "builder: (_) {\n" + space_1.SpaceX() + space_1.SpaceX() + "return ", "; \n  },\n" + ")", space_1.SpaceX(), false, false);
        vscode.window.setStatusBarMessage("Wrap Successfully Created", 2000);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("get.wrapInGetBuilder", () => {
        insert_snippet_1.insertSnippet("GetBuilder<${1:My}Controller>(\n" + space_1.SpaceX() + "init: ${1:My}Controller(),\n" + space_1.SpaceX() + "initState: (_) {},\n" + space_1.SpaceX() + "builder: (_) {\n" + space_1.SpaceX() + space_1.SpaceX() + "return ", "; \n  },\n" + ")", space_1.SpaceX(), false, false);
        vscode.window.setStatusBarMessage("Wrap Successfully Created", 2000);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("get.wrapInObx", () => {
        insert_snippet_1.insertSnippet("Obx(() =>" + " ", ")", space_1.SpaceX(), true, true);
        vscode.window.setStatusBarMessage("Wrap Successfully Created", 2000);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("get.removeKey", () => {
        vscode.window.showWarningMessage('You can now use the lamp by clicking on the name of the widget. The shortcut keys have been disabled.', ...['OK', 'Readme Snippets'])
            .then(selection => {
            if (selection === "Readme Snippets") {
                vscode.env.openExternal(vscode.Uri.parse('https://marketplace.visualstudio.com/items?itemName=get-snippets.get-snippets'));
            }
        });
    }));
};
//# sourceMappingURL=extension.js.map