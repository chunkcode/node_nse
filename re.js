async function market_data(givenUrl) {
 try {
    var https = require('follow-redirects').https;
    var fs = require('fs');
    
    var options = {
      'method': 'GET',
      'hostname': 'www.nseindia.com',
      'path': givenUrl,
      'headers': {
        'Cookie': 'ak_bmsc=502342E4E0AE163B069D0B3443EA20E0~000000000000000000000000000000~YAAQn3EsMcC49VuMAQAAgcprnBYQJup83dzPomf4xHcquGbTbWs3gsX/62N0iqFtaaWeS55fL8IB58uBxWTus85WhpvpJHNtyklVkz37MpL8VUxbB+Kaj58EpSRRRGN2TxWbI7akBoEpViwNbOlzD2r0129GhFd00PkWfNt72yQdqz3CuCbA0RdAdoXys9OQg6+AzagnrRnfV5OTcFdptQzpaf2K7qLjzqkzu4/PWzsi9TvS9lWYSqvcYWITGXUt/82CzQ+1lVCADeQwfeijvsBdH/wHWvy9ttzHvTcrAbuUzU5SRc8Cv7t4ENpDO7uMFAdM15vknLgsY5S+1xLtrNH//0P0Z+019xIDCTWd/me9NqYCWKMN5wqXpRDbsQ==; bm_sv=9BE88757EA3993ED3E919C6C1A7626CD~YAAQn3EsMQK59VuMAQAAKM5rnBbAwlDIeZm6vYtgp9zY3/HkqwM3FoWz44uezNKEcVEVcq4v+NRk8ITkReq5R8C0/Gg9JRngFRR6vh2xvDWVGyaZtY4+K1M56QEo+cBAh7ziSLUmgNKdytUfOAuZRGh3m7+cY7Q+zu+DmoN1A64V2rUg9Eh6qMie66lcUgBFZoB3D1ePmdloHyHk6djv9jkZQValhUse/adoUbqVAAujk3oUdN+xISRshCI10rFOuGs=~1'
      },
      'maxRedirects': 20
    };
    
    var req = https.request(options, function (res) {
      var chunks = [];
    
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
    
      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        if(body.toString().length <= 284){
            console.log("failed"+givenUrl+"\n\n");
        }
        else
        {
            
            console.log("okay"+givenUrl);
        }
      
      });
    
      res.on("error", function (error) {
        console.error(error);
      });
    });
    
    
} 
catch(error) {
 console.log("\nerror\n")
}
finally {
    req.end();
}
}



marketStatusUrl = "/api/marketStatus"
nifOptUrl = "/api/option-chain-indices?symbol=NIFTY"
bnknifOptUrl = "/api/option-chain-indices?symbol=BANKNIFTY"
nifty50OptUrl = "/api/equity-stockIndices?index=NIFTY%2050"
nifChartUrl = "/api/chart-databyindex?index=NIFTY%2050&indices=true"
bnknifChartUrl = "/api/chart-databyindex?index=NIFTY%20BANK&indices=true"


setInterval(()=>{market_data(marketStatusUrl)},1000)
setInterval(()=>{market_data(nifOptUrl)},1000)
setInterval(()=>{market_data(bnknifOptUrl)},1000)
setInterval(()=>{market_data(nifty50OptUrl)},1000)
setInterval(()=>{market_data(nifChartUrl)},1000)
setInterval(()=>{market_data(bnknifChartUrl)},1000)