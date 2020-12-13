import * as vscode from "vscode";
import {selected} from "./selected";

export function insertSnippet(
	previously: string,
	behind: string,
	spacex: string,
	substitute?: boolean | false,
	obx?: boolean | false
) {
	const editorX = vscode.window.activeTextEditor;

	if (editorX && editorX.selection.start !== editorX.selection.end) {
     
        const selectedText = selected(editorX);
        
		var sonny = editorX.document.getText(selectedText);
        
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
        editorX.insertSnippet(new vscode.SnippetString(replaceSonny), selectedText);
        
        vscode.commands.executeCommand(
            "editor.action.formatDocument"
          );
    }
    

}