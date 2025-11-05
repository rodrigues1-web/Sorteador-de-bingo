const numeros = Array.from({ length: 10}, (_,i) =>i+1);
const sorteados = [];

function sortear(){
    if(numeros.length===0){
     alert( "Todos os numeros foram sorteados")
      return;
  }
const i= Math.floor(Math.random()* numeros.length) ;
const n= numeros.splice(i,1)[0];
sorteados.push(n);
document.getElementById('bola').textContent = n;
document.getElementById('numeros').textContent="Numeros sorteados:"+sorteados.join(", ");
}