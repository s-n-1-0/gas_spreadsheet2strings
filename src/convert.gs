function convertByActiveSpreadsheet(languageKey){
  return convert(SpreadsheetApp.getActiveSpreadsheet(),languageKey);
}
function convertById(id,languageKey){
  return convert(SpreadsheetApp.openById(id),languageKey);
}
/**
 * @param {SpreadsheetApp.Spreadsheet} spreadsheet
 */
function convert(spreadsheet,languageKey){
  let output = ""
  console.log("処理するファイル名:" + spreadsheet.getName());
  let sheets = spreadsheet.getSheets()
  sheets.forEach(sheet =>{
  var rows = sheet.getDataRange().getValues();
  let sheetHead = rows[0][1];
  let dataHeads = rows[1];
  let languageIdx = dataHeads.indexOf(languageKey);
    if (languageIdx > -1){
      let data = rows.slice(2);
      data.forEach(row=>{
        output += `"${sheetHead}-${row[0]}" = "${row[languageIdx]}";\n`;
      })
    }
  });
  var out = ContentService.createTextOutput(output);
  Logger.log(out.getContent());
  return out;
}