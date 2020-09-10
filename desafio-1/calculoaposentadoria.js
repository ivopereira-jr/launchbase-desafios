const nome = 'jose';
const sexo = 'M';
const idade = 50;
const contribuicao = 35;

const contribuicaoMinima = idade + contribuicao;

if(sexo == 'F' && contribuicaoMinima >= 85 || sexo == 'M' && contribuicaoMinima >= 95) {
   console.log(`${nome} voce ja pode se aposentar`)
} else {
   console.log(`${nome} voce ainda nao pode se aposentar`)
}