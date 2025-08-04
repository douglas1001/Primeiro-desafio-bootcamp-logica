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