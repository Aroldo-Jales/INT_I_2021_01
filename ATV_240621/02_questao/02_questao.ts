export class Funcionario {
    private nome: string;
    private vendas: number;
    private salario_base: number;

    constructor(nome: string, vendas: number) {
        this.nome = nome;
        this.vendas = vendas;
        this.salario_base = 1100;
    }

    CalculaComissao() {
        let vendas: number = this.vendas;
        let comissao: number = 0;

        console.log('\n-------------------------------------------------------------');

        if (vendas > 5000) {
            comissao = (vendas - 5000) * 0.50;
            console.log('Comissao de 5%, maior que 5.000 até 10.000 = ' + comissao);
            if (vendas > 10000) {
                comissao = comissao + ((vendas - 10000) * 0.10);
                console.log('Comissao de 10% maior que 10.000 até 30.000 = ' + comissao);
                if(vendas > 30000) {
                    comissao = comissao + ((vendas) * 0.20);
                    console.log('Comissao de 20% maior que 30.000 = ' + comissao);
                }
            }
        } else {
            console.log('Sem Comissão' + comissao);
        }
        return comissao;
    }

    MostrarSalario() {
        let nome: string = this.nome;
        let salario_base: number = this.salario_base;
        let comissao: number = this.CalculaComissao();
        let salario_final: number = salario_base + comissao; 
        
        console.log('\nFuncionario: '+nome+
                    '\nSalario Base: '+salario_base+
                    '\nComissão: '+comissao+
                    '\nSalario Final: '+salario_final);
        console.log('-------------------------------------------------------------\n');
    }
}