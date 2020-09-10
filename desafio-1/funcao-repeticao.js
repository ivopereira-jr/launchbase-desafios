const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

for(let usuario of usuarios) {
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(',')}`)
}

//busca por tecnologia
function checaSeUsuarioUsaCss(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  for(let tecnologia of usuario.tecnologias) {
    if(tecnologia == 'CSS') return true
  }
  // SE encontrar, retorne true da função, caso contrário retorne false
  return false

}

for(let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCss = checaSeUsuarioUsaCss(usuarios[i])

  if(usuarioTrabalhaComCss) {
    console.log(`o usuario ${usuarios[i].nome} trabalha com Css`)
  }
}