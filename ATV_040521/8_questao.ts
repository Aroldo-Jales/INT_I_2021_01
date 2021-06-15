class MeuNumero {
    readonly  num: number;

    constructor(num: number){
        this.num = num
    }

    GetInteiro() {
        let int = Math.floor(this.num);
        return int
    }

    GetDecimal() {
        let dec = this.num - Math.floor(this.num);
        return dec
    }

}

let n = new MeuNumero(7.5);

console.log(n.GetInteiro())
console.log(n.GetDecimal())
