import * as vscode from "vscode";
import {validateCode} from "./validate";

export const selected = (editorX: vscode.TextEditor): vscode.Selection => {
    let remove: number = 1;
    let startCode: number = editorX.document.offsetAt(editorX.selection.start);
    let endCode: number = editorX.document.offsetAt(editorX.selection.end) - remove;
    let codeX: string = editorX.document.getText();
    let positionAtX = editorX.document.positionAt(0);
    let startX: number = 0;
    let endX: number = 0;
    let regexAz: RegExp = /[^A-Z]/;
    let regex: RegExp = /[^a-zA-Z]/;
    const regeX: RegExp = regex;

    // END
    for (let i = (codeX.length - endCode); i < codeX.length; i++) {

      switch(codeX.charAt(endCode)) { 
        case '(': { 
            startX++;
           break; 
        } 
        case ')': { 
            endX++; 
           break; 
        }  
      }
  
      if (i === codeX.length || endX > startX) {
            endCode = startX; startCode = startX;
        break;
      }
  
      if (startX === endX && startX > 0) {
        endCode++;
        if (!validateCode(codeX, endCode)) {
            endCode = startX; startCode = startX;
        }
        break;
      }
      endCode++;
    }

    // START
    for (let i = (codeX.length - startCode); i > 0; i--) {
      let valueCode: string = codeX.charAt(startCode);
      if (
          valueCode !== '.' &&
          regeX.test(valueCode
        )) {
        startCode++;
        if (regexAz.test(codeX.charAt(startCode))) {
          return new vscode.Selection(positionAtX, positionAtX);
        }
        let lineText: number = editorX.document.positionAt(startCode).line;
        let posiText: string = editorX.document.lineAt(lineText).text;
        if (
            posiText.indexOf('with') !== -1 ||
            posiText.indexOf('implements') !== -1 ||
            posiText.indexOf('=') !== -1 ||
            posiText.indexOf('class') !== -1 ||
            posiText.indexOf('extends') !== -1
        ) {
          return new vscode.Selection(positionAtX, positionAtX);
        }
        break;
      } else {startCode--;}
    }    
  
    let startFinal = editorX.document.positionAt(startCode);
    let endFinal = editorX.document.positionAt(endCode);

    return new vscode.Selection(startFinal, endFinal);
  };