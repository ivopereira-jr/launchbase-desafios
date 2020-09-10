const programador = {
    nome: "paulo",
    idade: 25,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuario ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade en ${programador.tecnologias[0].especialidade}`)