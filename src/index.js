const fileSystem = require("fs");
const Handlebars = require("handlebars");

const templateString = readTemplateFromFile("src/template.hbs");
const data = readSourceFromFile("src/data.json");
const compiledTemplate = compileTemplate(templateString, data);
console.log(compiledTemplate);

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