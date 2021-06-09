## Curso: Análise e Desenvolvimento de Sistemas
## Disciplina: Programação para Internet I 2021.1
## Professor(a): Ely da Silva Miranda
## Aluno: Aroldo Lenon Jales dos Santos

Atividade 07 - (04.05.21)

## 1) Verifique nas alternativas abaixo quais compilam ou não. Explique o motivo:

a) let a = 10;

a = "2";

Não compila,  pois o tipo string não pode ser atribuído a uma variável de tipo número.

b) let b: any = 10;

b = 2;

Compila, pois a variável b pode receber valores de todos os tipos.

c) let c: number = 10;

c = 2;

Compila, pois a variável c pode receber números e 2 na alternativa c) é um número.

## 2) Dada a função soma abaixo, tente executar os scripts das alternativas e exiba os
eventuais resultados:

function soma(x: number, y?: any): number {

return x + y
}

a) console.log(soma(1, 2));

= 3

b) console.log(soma(1, "2"));

= “12”

c) console.log(soma(1));

NaN = Not-A-Number

## 3) Crie uma enum com as siglas dos estados “PI”, “CE”, “MA” e implemente as duas
alternativas abaixo:

a) Crie um laço usando for para imprimir esses valores;

Codigo 3_questao_a.ts

b) Crie um laço que imprima os índices dessa enum e diga o que aconteceu.

Consegui imprimir apenas os índices com os valores da enum.
