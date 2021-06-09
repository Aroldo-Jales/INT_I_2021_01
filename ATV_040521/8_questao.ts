class MeuNumero {
    readonly num: number;

    constructor(num: number){
        this.num = num
    }

    function GetInteiro() {
        let int = Math.floor(this.num);
        console.log(int)
    }

}

let n = new MeuNumero(7.5);
n.GetInteiro()