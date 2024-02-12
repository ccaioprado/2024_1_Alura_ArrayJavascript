const dividirEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

//O metodo slice() corta um array pedindo um indice de inicio e um de fim do corte, sendo o indicine de fim não obrigatório
const sala1 = dividirEstudantes.slice(0, dividirEstudantes.length/2)
const sala2 = dividirEstudantes.slice(dividirEstudantes.length/2)

console.log(sala1)
console.log(sala2)