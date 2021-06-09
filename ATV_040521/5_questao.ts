function exibir(char_1: string, ...chars: string[]) {
    console.log(char_1 + " " + chars.join(", "))
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");