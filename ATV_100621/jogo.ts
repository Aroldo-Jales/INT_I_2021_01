class Personagem {
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

class Soldado extends Personagem {
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

class Cavaleiro extends Soldado {
    
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

class Jogo {
    players: Array<Personagem> = [];

    constructor() {
        this.players = []
    }

    sizeArray(): number {
        return this.players.length
    }

    inserir(p1:Personagem): void {
        let count = 0;
            
        for( let i = 0; i < this.players.length ; i++) {
            if (p1.id != this.players[i].id) {
                count += 1;
            } else {
                break;
            }
        }

        if (count == this.players.length) {
            this.players.push(p1);
            console.log('Personagem inserido.');

        } else {
            console.log('Já existem outros personagens com o mesmo id.');
        }
}

    consultar(id: number): any {
        for( let i = 0; i < this.players.length ; i++) {
            if (id == this.players[i].id) {
                return this.players[i];
            }
    }
        return null;
    }

    atacar(id1: number, id2: number): void {
        let p1 = this.consultar(id1);
        let p2 = this.consultar(id2);

        if (p1 && p2 != null) {
            if (id1 != id2) {
                if (p1 instanceof Cavaleiro || p1 instanceof Soldado) {
                    p1.atacar(p2);
                } else {
                    console.log('O Personagem de id',id1,'não é cavaleiro ou soldado!');
                }
            } else {
                console.log('O atacante possui o mesmo id que o atacado!')
            }
        }
}

    avaliarbatalha(): void {
        for( let i = 0; i < this.players.length ; i++) {
            console.log('_________________');
            console.log('ID: ', this.players[i].id);
            console.log('NOME: ', this.players[i].nome);
            console.log('ENERGIA: ', this.players[i].energia);
            console.log('ESTA VIVO ?: ', this.players[i].estaVivo())
        }
    }
}

// CRIAÇÃO DOS PERSONAGENS
let c1 = new Cavaleiro(1, 'Geralt', 100, 20);
let s1 = new Soldado(2, 'Zoltan', 100, 10);
let s2 = new Soldado(3, 'Vernom', 100, 10);
let p1 = new Personagem(4, 'Dijkstra', 100);

// NOVO JOGO
let j1 = new Jogo();

// INSERSÃO NO ARRAY DO JOGO
j1.inserir(c1)
j1.inserir(s1)
j1.inserir(s2)
j1.inserir(p1)

// RODADA COM TODAS AS POSSIBILIADADES DE ATAQUE
function rodada(): void {
    let size = j1.sizeArray()
    for (let i = 1; i < size+1; i ++) {
        for(let j = 1; j < size+1; j ++) {
            j1.atacar(i,j)
        }
    }
}

// BATALHA 
for (let i = 0 ; i < 3; i++){
    rodada()
    j1.avaliarbatalha()
}
