function convertTextOutputByActiveSpreadsheet(languageKey){
  return convertTextOutput(SpreadsheetApp.getActiveSpreadsheet(),languageKey);
}
function convertTextOutputById(id,languageKey){
  return convertTextOutput(SpreadsheetApp.openById(id),languageKey);
}
/**
 * @param {SpreadsheetApp.Spreadsheet} spreadsheet
 */
function convertTextOutput(spreadsheet,languageKey){
  let output = getStrings(spreadsheet,languageKey);
  var out = ContentService.createTextOutput(output);
  Logger.log(out.getContent());
  return out;
}

function getStrings(spreadsheet,languageKey){
  let output = `"language" = "${languageKey}";\n`;
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
  return output;
}