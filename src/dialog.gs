/**
 * onOpen関数を用いたstrings出力
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("翻訳出力")
  .addItem("strings", "downloadStrings")
  .addToUi();
}
function downloadStrings(){
  let html = HtmlService.createTemplateFromFile("download-dialog").evaluate();
  SpreadsheetApp.getUi().showModalDialog(html, "Download!!");
}
/**
 * 各シート2行目に入力した言語識別キー
 */
function getStringsByMenu(langkey){
  let spreadsheets = SpreadsheetApp.getActiveSpreadsheet();
  let strings = getStrings(spreadsheets,langkey);
  return strings;
}