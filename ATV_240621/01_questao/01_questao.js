"use strict";
exports.__esModule = true;
exports.CovidCasos = void 0;
var CovidCasos = /** @class */ (function () {
    function CovidCasos(media_quartoze, media_hoje) {
        this.media_quartoze = media_quartoze;
        this.media_hoje = media_hoje;
    }
    CovidCasos.prototype.CalculaVariacao = function () {
        var media_quartoze = this.media_quartoze;
        var media_hoje = this.media_hoje;
        var variacao = 0;
        variacao = ((media_hoje / media_quartoze - 1) * 100);
        return variacao;
    };
    CovidCasos.prototype.Resultado = function () {
        var variacao = this.CalculaVariacao();
        var percentual = 15;
        var resultado = "";
        if (variacao > percentual) {
            resultado = "Em alta.";
        }
        else if (variacao < percentual * (-1)) {
            resultado = "Em queda.";
        }
        else {
            resultado = "Em estabilidade.";
        }
        return variacao.toFixed(2) + "%" + ", " + resultado;
    };
    return CovidCasos;
}());
exports.CovidCasos = CovidCasos;
