let wseth = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");

let precoNormalEth = document.getElementById('valorEth');
let iconeEth = document.getElementById("ethMoeda");
let ultimoPreco = null;

wseth.onmessage = (event) =>{
   let moeda = JSON.parse(event.data);
   let preco= parseFloat(moeda.p).toFixed(2);
   precoNormalEth.innerHTML = preco;
   precoNormalEth.style.color = !ultimoPreco || ultimoPreco === preco ? 'black' : preco > ultimoPreco ? 'green' : 'red';
   iconeEth.style.color = !ultimoPreco || ultimoPreco === preco ? 'black' : preco > ultimoPreco ? 'green' : 'red';  
   ultimoPreco = preco;
  
}