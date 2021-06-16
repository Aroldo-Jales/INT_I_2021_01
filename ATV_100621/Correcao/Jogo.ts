import {Personagem, Soldado, Cavaleiro} from './personagem';

class Jogo {
    players: Array<Personagem> = [];

    constructor() {
        this.players = []
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

        if (p1 && p2 != null && id1 != id2) {
            if (p1 instanceof Cavaleiro || p1 instanceof Soldado) {
                p1.atacar(p2);
            } else {
                console.log('O Personagem de id',id1,'não é cavaleiro ou soldado!');
            }
        }    
}

    avaliarbatalha(): void {
        for( let i = 0; i < this.players.length ; i++) {
            console.log('_________________');
            console.log('ID: ', this.players[i].id);
            console.log('NOME: ', this.players[i].nome);
            console.log('ENERGIA: ', this.players[i].energia);
            console.log('VIVO ?: ', this.players[i].estaVivo())
        }
    }

    getArray(){
        return this.players
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
    let size = j1.getArray().length;
    for (let i = 1; i < size+1; i ++) {
        for(let j = 1; j < size+1; j ++) {
            j1.atacar(i,j)
        }
    }
}

// BATALHA 
for (let i = 0 ; i < 3; i++) {
    rodada()
    j1.avaliarbatalha()
}
