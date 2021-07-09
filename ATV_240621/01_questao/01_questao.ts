export class CovidCasos {
    private media_quartoze: number;
    private media_hoje: number;

    constructor(media_quartoze: number, media_hoje: number) {
        this.media_quartoze = media_quartoze;
        this.media_hoje = media_hoje;
    }

    CalculaVariacao() {
        let media_quartoze: number = this.media_quartoze;
        let media_hoje: number = this.media_hoje;
        let variacao: number = 0;

        variacao = ((media_hoje/media_quartoze -1)* 100);

        return variacao;
    }

    Resultado() {
        let variacao: number = this.CalculaVariacao();
        let percentual: number = 15;
        let resultado: string = "";

        if (variacao > percentual) {
            resultado = "Em alta.";
        } else if (variacao < percentual*(-1)) {
            resultado = "Em queda.";
        } else {
            resultado = "Em estabilidade.";
        }
        return variacao.toFixed(2) + "%" + ", " + resultado;
    }
}