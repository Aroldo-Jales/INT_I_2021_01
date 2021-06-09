enum DiasSemana {
    "domingo",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sábado"
}

function len(colecao: object): number {
    let size = 0;
    for (let element in colecao) {
        size++;
    }
    return size/2;
}

namespace DiasSemana {
    export function isDiaUtil(dia: string) {
        if(dia == "domingo" || dia == "sábado") {
            return false
        } else {
            return true
        }
    }
}

for (let i=0; i<len(DiasSemana)-1 ; i++){
    console.log(DiasSemana.isDiaUtil(DiasSemana[i]))
}