let name = "remo";
let surname = "jansen";
function htmlEscape(literals: TemplateStringsArray, ...placeholders: any[]){
  let result = ""
  console.log(literals);
  console.log(placeholders);

  for(let i = 0; i < placeholders.length; i++){
    result += literals[i]
    result += placeholders[i]
      .replace(/&/g,"&amp;")
      .replace(/"/g, "&quot;")
      .replace(/"/g, "'")
      .replace(/</g,"&lt;")
      .replace(/>/g, "&gt;");
    result += literals[literals.length - 1];
    return result;
  }
}

let html = htmlEscape `<h1>${name} ${surname}</h1>`;
console.log(typeof html)
