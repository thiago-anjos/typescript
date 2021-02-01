// criar um namespace dentro de um arquivo
// no javascript e no typescript já temos um sistema de módulo ES6, import e export ( módulos )
// um módulo é um namespace
// inclusive isso é só um exemplo, utilize o módulo do js mesmo
/* eslint-disable @typescript-eslint/no-namespace */
var MeuNameSpace;
(function (MeuNameSpace) {
    MeuNameSpace.nome = 'Eu sou o Chris';
    var PersonNameSpace = /** @class */ (function () {
        function PersonNameSpace(name) {
            this.name = name;
        }
        return PersonNameSpace;
    }());
    MeuNameSpace.PersonNameSpace = PersonNameSpace;
    var person = new PersonNameSpace('thiago');
    console.log(person);
})(MeuNameSpace || (MeuNameSpace = {}));
var personOutside = new MeuNameSpace.PersonNameSpace('Luiz');
console.log(personOutside);
console.log(MeuNameSpace.nome);
/// <reference path="module.ts" />
console.log(MeuNameSpace);
//para que o js entenda a exportacao preciso fazer um 'hack'
// npx tsc index.ts --outfile arquivoCompilado.js
