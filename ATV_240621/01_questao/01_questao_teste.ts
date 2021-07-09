import {CovidCasos} from './01_questao';

let cov1 = new CovidCasos(400,500);
let cov2 = new CovidCasos(400,350);
let cov3 = new CovidCasos(400,340);

console.log(cov1.Resultado());
console.log(cov2.Resultado());
console.log(cov3.Resultado());