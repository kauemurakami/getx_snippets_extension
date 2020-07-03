import { commands, ExtensionContext } from '../node_modules/vscode';


export function activate(_context: ExtensionContext){
    commands.reisterCommand("extension.init-project", newProjectPackage)
}