let nomeHeroi = "Douglas" ;
let experienciaHeroi = 7985;
let nivel= ""

//Verificação do Nivel do Herói usando estrutura de repetição switch

switch (true) {
    case (experienciaHeroi <= 1000):
        nivel = "Ferro";
        break;
    case (experienciaHeroi <= 2000):
        nivel = "Bronze";
        break;
    case (experienciaHeroi <= 5000):
        nivel = "Prata";
        break;
    case (experienciaHeroi <= 7000):
        nivel = "Ouro";
        break;
    case (experienciaHeroi <= 8000):
        nivel = "Platina";
        break;
    case (experienciaHeroi <= 9000):
        nivel = "Ascendente";
        break;
    case (experienciaHeroi <= 10000):
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
        break;
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel );

/* Esse foi meu codigo incial, depois de fazer algumas consultas com IA,  onde ela me indicou que poderia melhorar.
Estou deixando ele anexado para que consiga entender que a lógica e estruturação existiu corretamente, porém 
como um bom iniciante sempre tem o que melhorar.

O mais importante que consegui entender como fazer nos dois casos, utilizando estrutura de repetição ou não.

let NomeHeroi = "Douglas" ;
let ExperienciaHeori = 10000;

//Verificação do Nivel do Herói

if (ExperienciaHeori <= 1000){
    console.log("O Herói de nome "+ NomeHeroi +" está no nível de Ferro")
}else if (ExperienciaHeori >= 1001 && ExperienciaHeori <= 2000 ){
    console.log("O Herói de nome "+ NomeHeroi +" está no nível de Bronze")
}else if (ExperienciaHeori >= 2001 && ExperienciaHeori <= 5000 ){
    console.log("O Herói de nome "+ NomeHeroi +" está no nível de Prata")
}else if (ExperienciaHeori >= 5001 && ExperienciaHeori <= 7000 ){
    console.log("O Herói de nome "+ NomeHeroi +" está no nível de Ouro")
}else if (ExperienciaHeori >= 7001 && ExperienciaHeori <= 8000 ){
    console.log("O Herói de nome "+ NomeHeroi +" está no nível de Platina")
}else if (ExperienciaHeori < 8001 && ExperienciaHeori <= 9000 ){
    console.log("O Herói de nome "+ NomeHeroi +" está no nível de Ascendente")
}else if (ExperienciaHeori < 9001 && ExperienciaHeori <= 10000 ){
    console.log("O Herói de nome "+ NomeHeroi +" está no nível de Imortal")
}else {
    console.log("O Herói de nome "+ NomeHeroi +" está no nível de Radiante")
}*/