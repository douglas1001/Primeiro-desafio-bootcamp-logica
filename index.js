let NomeHeroi = "Douglas" ;
let ExperienciaHeori = 1000;

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
}