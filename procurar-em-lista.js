const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]

function exibeAlunoENota(aluno){
    // O metodo includes() procura uma string dentro de uma lista 
    if(lista[0].includes(aluno)){
        const indice = lista[0].indexOf(aluno)
        const mediaAluno = lista[1][indice]
        console.log(`${aluno} tem a média ${mediaAluno}`)
    }else{
        console.log('Aluno não consta na lista')
    }
}

exibeAlunoENota('Caio')
