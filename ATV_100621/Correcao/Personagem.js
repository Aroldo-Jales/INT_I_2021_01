"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cavaleiro = exports.Soldado = exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(id, nome, energia) {
        this.id = id;
        this.nome = nome;
        this.energia = energia;
    }
    Personagem.prototype.estaVivo = function () {
        if (this.energia == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Personagem.prototype.defenderAtaque = function (valor) {
        var v = this.energia - valor;
        if (v < 0) {
            this.energia = 0;
        }
        else {
            this.energia = v;
        }
    };
    Personagem.prototype.getId = function () {
        return this.id;
    };
    Personagem.prototype.getNome = function () {
        return this.nome;
    };
    Personagem.prototype.getEnergia = function () {
        return this.energia;
    };
    return Personagem;
}());
exports.Personagem = Personagem;
var Soldado = /** @class */ (function (_super) {
    __extends(Soldado, _super);
    function Soldado(id, nome, energia, forcataque) {
        var _this = _super.call(this, id, nome, energia) || this;
        _this.forcataque = forcataque;
        return _this;
    }
    Soldado.prototype.atacar = function (p) {
        p.defenderAtaque(this.forcataque);
    };
    Soldado.prototype.defenderAtaque = function (valor) {
        valor = valor / 2;
        var v = this.energia - valor;
        if (v < 0) {
            this.energia = 0;
        }
        else {
            this.energia = v;
        }
    };
    Soldado.prototype.getForcataque = function () {
        return this.forcataque;
    };
    return Soldado;
}(Personagem));
exports.Soldado = Soldado;
var Cavaleiro = /** @class */ (function (_super) {
    __extends(Cavaleiro, _super);
    function Cavaleiro(id, nome, energia, forcataque) {
        return _super.call(this, id, nome, energia, forcataque) || this;
    }
    Cavaleiro.prototype.atacar = function (p) {
        p.defenderAtaque(this.forcataque * 2);
    };
    Cavaleiro.prototype.defenderAtaque = function (valor) {
        valor = valor / 3;
        var v = this.energia - valor;
        if (v < 0) {
            this.energia = 0;
        }
        else {
            this.energia = v;
        }
    };
    return Cavaleiro;
}(Soldado));
exports.Cavaleiro = Cavaleiro;
