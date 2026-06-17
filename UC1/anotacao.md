 let lista = ["PAULA LINS",
"JOSÉ IÊDO",
"FRANCISCO ARTÊNIO",
"FRANCISCA LINS",
  ]

<script>

let nomes = [
    "PAULA LINS",
    "JOSÉ IÊDO",
    "FRANCISCO ARTÊNIO",
    "FRANCISCA LINS"
];

let option = prompt("Selecione um cliente (Digite o código)");

while (option !== "") {

    let novonum = Number(option) - 1;

    if (isNaN(novonum) || novonum < 0 || novonum >= nomes.length) {
        alert("Código inválido!");
    } else {

        alert(`
DADOS DO USUÁRIO
======================
VOCÊ SELECIONOU:
Nome: ${nomes[novonum]}
`);
    }

    option = prompt("Selecione um cliente (Digite o código)");
}

alert("Ação Cancelada");

</script>