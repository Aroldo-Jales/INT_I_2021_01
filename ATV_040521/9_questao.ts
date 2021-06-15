class Transacao {
    readonly  valor: number;
    readonly  desconto: number;

    constructor(valor: number, desconto: number) {
        this.valor = valor
        this.desconto = desconto
    }

    CalcDesconto() {
        return this.valor * (1 - this.desconto/100)
    }

    getValor() {
        return this.valor
    }

    getDesconto() {
        return this.desconto
    }

}

let t1 = new Transacao(100, 10)
console.log(t1.CalcDesconto())
console.log(t1.getValor())
console.log(t1.getDesconto())