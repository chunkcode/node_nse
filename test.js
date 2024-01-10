const {Builder, By, Key, until, promise, error} = require('selenium-webdriver');
const marketData = (givenUrl) => {
    return new Promise(async (resolve, reject) => {
        let driver =  new Builder().forBrowser("chrome").build();
        try {
          await driver.get(givenUrl);
        
          let data = await driver.findElement(By.xpath("/html/body/pre")).getText();
        
          resolve(data);
        } 
        catch(error){
            reject(0);
        }
        finally {
        await driver.quit();
        }
    });
};

marketStatusUrl = "https://www.nseindia.com/api/marketStatus"
nifOptUrl = "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY"
bnknifOptUrl = "https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY"
finOptUrl = "https://www.nseindia.com/api/option-chain-indices?symbol=FINNIFTY"

// const apiReq = [marketData(marketStatusUrl),marketData(nifOptUrl),marketData(bnknifOptUrl),marketData(finOptUrl)]
const apiReq = [marketStatusUrl,nifOptUrl,bnknifOptUrl,finOptUrl]

apiReq.forEach(async element => {
     data = await marketData(element);
     console.log(data);    
});