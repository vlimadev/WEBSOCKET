let wsbitcoin = new WebSocket("wss://stream.binance.com:9443/ws/btcbusd@trade");

let precoNormalBtc = document.getElementById('valorBtc');
let iconeBtc = document.getElementById("btcMoeda");
let ultimoPrecoBtc = null;


wsbitcoin.onmessage = (event) =>{
   let moeda = JSON.parse(event.data);
   let precoBtc= parseFloat(moeda.p).toFixed(2);
   precoNormalBtc.innerHTML = precoBtc;
   precoNormalBtc.style.color = !ultimoPrecoBtc || ultimoPrecoBtc === precoBtc ? 'black' : precoBtc > ultimoPrecoBtc ? 'green' : 'red';
   iconeBtc.style.color = !ultimoPrecoBtc || ultimoPrecoBtc === precoBtc ? 'black' : precoBtc > ultimoPrecoBtc ? 'green' : 'red';  
   ultimoPrecoBtc = precoBtc;
  
}

console.log(precoNormalBtc.style.cssText)
