"use strict";
exports.__esModule = true;
var _01_questao_1 = require("./01_questao");
var cov1 = new _01_questao_1.CovidCasos(400, 500);
var cov2 = new _01_questao_1.CovidCasos(400, 350);
var cov3 = new _01_questao_1.CovidCasos(400, 340);
console.log(cov1.Resultado());
console.log(cov2.Resultado());
console.log(cov3.Resultado());
