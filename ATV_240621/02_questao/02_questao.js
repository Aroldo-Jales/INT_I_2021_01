"use strict";
exports.__esModule = true;
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, vendas) {
        this.nome = nome;
        this.vendas = vendas;
        this.salario_base = 1100;
    }
    Funcionario.prototype.CalculaComissao = function () {
        var vendas = this.vendas;
        var comissao = 0;
        console.log('\n-------------------------------------------------------------');
        if (vendas > 5000) {
            comissao = (vendas - 5000) * 0.50;
            console.log('Comissao de 5%, maior que 5.000 até 10.000 = ' + comissao);
            if (vendas > 10000) {
                comissao = comissao + ((vendas - 10000) * 0.10);
                console.log('Comissao de 10% maior que 10.000 até 30.000 = ' + comissao);
                if (vendas > 30000) {
                    comissao = comissao + ((vendas) * 0.20);
                    console.log('Comissao de 20% maior que 30.000 = ' + comissao);
                }
            }
        }
        else {
            console.log('Sem Comissão' + comissao);
        }
        return comissao;
    };
    Funcionario.prototype.MostrarSalario = function () {
        var nome = this.nome;
        var salario_base = this.salario_base;
        var comissao = this.CalculaComissao();
        var salario_final = salario_base + comissao;
        console.log('\nFuncionario: ' + nome +
            '\nSalario Base: ' + salario_base +
            '\nComissão: ' + comissao +
            '\nSalario Final: ' + salario_final);
        console.log('-------------------------------------------------------------\n');
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
