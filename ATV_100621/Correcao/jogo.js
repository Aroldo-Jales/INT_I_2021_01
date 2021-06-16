"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personagem_1 = require("./personagem");
var Jogo = /** @class */ (function () {
    function Jogo() {
        this.players = [];
        this.players = [];
    }
    Jogo.prototype.inserir = function (p1) {
        var count = 0;
        for (var i = 0; i < this.players.length; i++) {
            if (p1.id != this.players[i].id) {
                count += 1;
            }
            else {
                break;
            }
        }
        if (count == this.players.length) {
            this.players.push(p1);
            console.log('Personagem inserido.');
        }
        else {
            console.log('Já existem outros personagens com o mesmo id.');
        }
    };
    Jogo.prototype.consultar = function (id) {
        for (var i = 0; i < this.players.length; i++) {
            if (id == this.players[i].id) {
                return this.players[i];
            }
        }
        return null;
    };
    Jogo.prototype.atacar = function (id1, id2) {
        var p1 = this.consultar(id1);
        var p2 = this.consultar(id2);
        if (p1 && p2 != null && id1 != id2) {
            if (p1 instanceof personagem_1.Cavaleiro || p1 instanceof personagem_1.Soldado) {
                p1.atacar(p2);
            }
            else {
                console.log('O Personagem de id', id1, 'não é cavaleiro ou soldado!');
            }
        }
    };
    Jogo.prototype.avaliarbatalha = function () {
        for (var i = 0; i < this.players.length; i++) {
            console.log('_________________');
            console.log('ID: ', this.players[i].id);
            console.log('NOME: ', this.players[i].nome);
            console.log('ENERGIA: ', this.players[i].energia);
            console.log('VIVO ?: ', this.players[i].estaVivo());
        }
    };
    Jogo.prototype.getArray = function () {
        return this.players;
    };
    return Jogo;
}());
// CRIAÇÃO DOS PERSONAGENS
var c1 = new personagem_1.Cavaleiro(1, 'Geralt', 100, 20);
var s1 = new personagem_1.Soldado(2, 'Zoltan', 100, 10);
var s2 = new personagem_1.Soldado(3, 'Vernom', 100, 10);
var p1 = new personagem_1.Personagem(4, 'Dijkstra', 100);
// NOVO JOGO
var j1 = new Jogo();
// INSERSÃO NO ARRAY DO JOGO
j1.inserir(c1);
j1.inserir(s1);
j1.inserir(s2);
j1.inserir(p1);
// RODADA COM TODAS AS POSSIBILIADADES DE ATAQUE
function rodada() {
    var size = j1.getArray().length;
    for (var i = 1; i < size + 1; i++) {
        for (var j = 1; j < size + 1; j++) {
            j1.atacar(i, j);
        }
    }
}
// BATALHA 
for (var i = 0; i < 3; i++) {
    rodada();
    j1.avaliarbatalha();
}
