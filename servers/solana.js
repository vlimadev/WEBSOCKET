let wsSol = new WebSocket("wss://stream.binance.com:9443/ws/solbusd@trade");

let precoNormalSol = document.getElementById('valorSol');
let iconeSol = document.getElementById("solMoeda");
let ultimoPrecoSol = null;

wsSol.onmessage = (event) =>{
   let moeda = JSON.parse(event.data);
   let precoSol= parseFloat(moeda.p).toFixed(2);
   precoNormalSol.innerHTML = precoSol;
   precoNormalSol.style.color = !ultimoPrecoSol || ultimoPrecoSol === precoSol ? 'black' : precoSol > ultimoPrecoSol ? 'green' : 'red';
   iconeSol.style.color = !ultimoPrecoSol || ultimoPrecoSol === precoSol ? 'black' : precoSol > ultimoPrecoSol ? 'green' : 'red';  
   ultimoPrecoSol = precoSol;
  
}