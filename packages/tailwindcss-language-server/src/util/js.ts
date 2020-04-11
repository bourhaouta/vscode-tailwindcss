import { TextDocument } from 'vscode-languageserver'

export const JS_LANGUAGES = [
  'javascript',
  'javascriptreact',
  'reason',
  'svelte',
  'typescriptreact'
]

export function isJsDoc(doc: TextDocument): boolean {
  return JS_LANGUAGES.indexOf(doc.languageId) !== -1
}
