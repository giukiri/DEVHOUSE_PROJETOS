let cidades = [
    { nome: 'Patos de Minas', populacao: 153585 },
    { nome: 'Lages', populacao: 157349 },
    { nome: 'Ibiúna', populacao: 79479 },
    { nome: 'Maringá', populacao: 403063 },
    { nome: 'Curitiba', populacao: 1963726 },
    { nome: 'Florianópolis', populacao: 508826 },
    { nome: 'Pato Branco', populacao: 84779 },
];

console.log(cidades);

function checarHabitantes (cidade){
    if(cidade.populacao > 200000)
        return cidade
    }

const cidadesComMaisHabitantes = cidades.filter(checarHabitantes);

console.log(cidadesComMaisHabitantes)