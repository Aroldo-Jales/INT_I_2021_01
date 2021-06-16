export class Personagem {
    id: number;
    nome: string;
    energia: number;
    
    constructor(id: number, nome: string, energia: number) {
        this.id = id;
        this.nome = nome;
        this.energia = energia;
    }

    estaVivo(): boolean {
        if (this.energia == 0) {
            return false;
        } else {
            return true;
        }
    }

    defenderAtaque(valor: number): void {
        let v = this.energia - valor;

        if (v < 0) {
            this.energia = 0;
        } else {
            this.energia = v;
        }
    }

    getId() {
        return this.id;
    }

    getNome() {
        return this.nome;
    }

    getEnergia() {
        return this.energia;
    }
}

export class Soldado extends Personagem {
    forcataque: number;

    constructor(id: number , nome: string, energia: number, forcataque: number) {
        super(id, nome, energia);
        this.forcataque = forcataque;
    }

    atacar(p: Personagem) {
        p.defenderAtaque(this.forcataque);
    }

    defenderAtaque(valor: number): void {
        valor = valor / 2;
        let v = this.energia - valor;

        if (v < 0) {
            this.energia = 0;
        } else {
            this.energia = v;
        }
    }

    getForcataque() {
        return this.forcataque;
    }
}

export class Cavaleiro extends Soldado {
    
    constructor(id: number , nome: string, energia: number, forcataque: number) {
        super(id, nome, energia, forcataque);
    }
    
    atacar(p: Personagem) {
        p.defenderAtaque(this.forcataque * 2);
    }

    defenderAtaque(valor: number): void {
        valor = valor / 3;
        let v = this.energia - valor;

        if (v < 0) {
            this.energia = 0;
        } else {
            this.energia = v;
        }
    }
}
