const fileSystem = require("fs");
const Handlebars = require("handlebars");

const templateString = readTemplateFromFile("src/template.hbs");
const data = readSourceFromFile("src/data.json");
const compiledTemplate = compileTemplate(templateString, data);

consolePrintTemplate(compiledTemplate);
consolePrintDate();

writeCompiledTemplateToFile(compiledTemplate);

function readTemplateFromFile(path) {
    return fileSystem.readFileSync(path, "utf-8");
}

function readSourceFromFile(path) {
    return JSON.parse(fileSystem.readFileSync(path, "utf-8"));
}

function compileTemplate(templateString, data) {
    const template = Handlebars.compile(templateString);
    return template(data);
}

function writeCompiledTemplateToFile(compiledTemplate) {
    fileSystem.writeFileSync("src/compiled/index.html", compiledTemplate);
}

function consolePrintTemplate(compiledTemplate) {
    console.log("***********************");
    console.log("Compiled template: ");
    console.log(compiledTemplate);
    console.log("***********************");
}

function consolePrintDate() {
    console.log("///////////////////////////////");
    console.log("Build in : ");
    // format date in hh/mm/ss dd/mm/yyyy with new date
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
    const year = date.getFullYear();

    console.log(`${hours}:${minutes}:${seconds} ${day}/${month}/${year}`);

    console.log("///////////////////////////////");
}
