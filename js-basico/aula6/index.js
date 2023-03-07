/*
Carlos Campos tem 22 anos, pesa 78 kg tem 
1.83 de altura e seu IMC é ***********
Carlos nasceu em 2000
*/
const nome = 'Carlos';
const sobrenome = 'Campos';
const idade = 22;
const peso = 78;
const altura = 1.83;
let anoDeNascimento;
const anoAtual = 2022;
let imc; // peso / (altura * altura)

imc = peso/(altura * altura);
anoDeNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem`);
console.log(`${altura} de altura e seu IMC é ${imc}`);
console.log(`${nome} nasceu em ${anoDeNascimento}`);