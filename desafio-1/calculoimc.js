const nome = 'joao';
const peso = 60;
const altura = 1.60;

const imc = peso / (altura * altura)

if(imc >= 30) {
   console.log(`${nome} voce esta acima do peso`)
} else {
   console.log(`${nome} voce nao esta acima do peso`)
}
