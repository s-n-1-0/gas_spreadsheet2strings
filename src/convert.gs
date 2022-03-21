function convert(id){
  let output = ""
  let language = 2;
  console.log("処理するファイル名:" + SpreadsheetApp.openById(id).getName());
  let sheets = SpreadsheetApp.openById(id).getSheets()
  sheets.forEach(sheet =>{
  var rows = sheet.getDataRange().getValues();
  let head = rows[0][1]
  for(let i = 2;i<rows.length;i++){
    output += '"' + head + '-' + rows[i][0] + '" = "' + rows[i][language]+'";\n'
  }
  });
  var out = ContentService.createTextOutput(output);
  Logger.log(out.getContent());
  return out;
}