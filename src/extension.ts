import { commands, ExtensionContext } from '../node_modules/vscode/vscode.d.ts';
import {newProjectPackage} from './commands';

export function activate(_context: ExtensionContext){
    commands.reisterCommand("extension.init-project", newProjectPackage);
}