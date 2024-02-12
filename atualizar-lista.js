const listaEstudantes = ['João', 'Ana', 'Caio', 'Marjorie', 'Leo']

// O metodo splice() pede o indice de onde irá começar a remoção do valor, o próximo item será quantos itens depois irão ser removidos e o terceiro parâmetro é o valor a ser inserido no lugar
listaEstudantes.splice(1,2, 'Rodrigo')

console.log(listaEstudantes)