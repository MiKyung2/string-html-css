// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

interface ColorPresentationContext {
  readonly document: vscode.TextDocument;
  readonly range: vscode.Range;
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.languages.registerColorProvider(
    { scheme: "file" },
    {
      provideColorPresentations(
        document: vscode.TextDocument,
        color: vscode.Color,
        context: vscode.ColorPresentation,
        token: vscode.CancellationToken
      ): vscode.ProviderResult<vscode.ColorPresentation[]> {
        // HTML과 CSS를 파싱하여 각 요소에 대한 색상을 결정하고 프레젠테이션을 제공
        const colorPresentations: vscode.ColorPresentation[] = [];
        // 여기에 HTML과 CSS를 파싱하고 색상을 입히는 로직을 작성하세요.
        // 예를 들어, 백틱 안의 코드를 정규식을 사용하여 추출하고 분석한 후 각 요소에 적절한 색상을 지정합니다.
        return colorPresentations;
      },
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

// https://github.com/microsoft/vscode-css-languageservice
// https://github.com/microsoft/vscode-html-languageservice
