const {Builder, By, Key, until} = require('selenium-webdriver');
const fs = require('fs')
async function market_data(givenUrl) {
let driver = await new Builder().forBrowser("chrome").build();
try {
await driver.get(givenUrl);
await new Promise(resolve => setTimeout(resolve, 1000));
let data = await driver.findElement(By.xpath("/html/body/pre")).getText();
let writer = fs.createWriteStream('market_data.txt'); 
 writer.write(data); 
} 
catch(error) {
 console.log("\nerror\n")
}
finally {
await driver.quit();
}
}
async function nifty_opt(givenUrl) {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
    await driver.get(givenUrl);
    await new Promise(resolve => setTimeout(resolve, 1000));
    let data = await driver.findElement(By.xpath("/html/body/pre")).getText();
    let writer = fs.createWriteStream('nifty_opt.txt'); 
     writer.write(data); 
    } 
    catch(error) {
     console.log("\nerror\n")
    }
    finally {
    await driver.quit();
    }
    }
    async function banknifty_opt(givenUrl) {
        let driver = await new Builder().forBrowser("chrome").build();
        try {
        await driver.get(givenUrl);
        await new Promise(resolve => setTimeout(resolve, 1000));
        let data = await driver.findElement(By.xpath("/html/body/pre")).getText();
        let writer = fs.createWriteStream('banknifty_opt.txt'); 
         writer.write(data); 
        } 
        catch(error) {
         console.log("\nerror\n")
        }
        finally {
        await driver.quit();
        }
        }
        async function nifty50_data(givenUrl) {
            let driver = await new Builder().forBrowser("chrome").build();
            try {
            await driver.get(givenUrl);
            await new Promise(resolve => setTimeout(resolve, 1000));
            let data = await driver.findElement(By.xpath("/html/body/pre")).getText();
            let writer = fs.createWriteStream('nifty50.txt'); 
             writer.write(data); 
            } 
            catch(error) {
             console.log("\nerror\n")
            }
            finally {
            await driver.quit();
            }
            }
            async function nifty_chart(givenUrl) {
                let driver = await new Builder().forBrowser("chrome").build();
                try {
                await driver.get(givenUrl);
                await new Promise(resolve => setTimeout(resolve, 1000));
                let data = await driver.findElement(By.xpath("/html/body/pre")).getText();
                let writer = fs.createWriteStream('niftychart.txt'); 
                 writer.write(data); 
                } 
                catch(error) {
                 console.log("\nerror\n")
                }
                finally {
                await driver.quit();
                }
                }
                async function banknifty_chart(givenUrl) {
                    let driver = await new Builder().forBrowser("chrome").build();
                    try {
                    await driver.get(givenUrl);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    let data = await driver.findElement(By.xpath("/html/body/pre")).getText();
                    let writer = fs.createWriteStream('bankniftychart.txt'); 
                     writer.write(data); 
                    } 
                    catch(error) {
                     console.log("\nerror\n")
                    }
                    finally {
                    await driver.quit();
                    }
                    }

marketStatusUrl = "https://www.nseindia.com/api/marketStatus"
nifOptUrl = "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY"
bnknifOptUrl = "https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY"
nifty50OptUrl = "https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050"
nifChartUrl = "https://www.nseindia.com/api/chart-databyindex?index=NIFTY%2050&indices=true"
bnknifChartUrl = "https://www.nseindia.com/api/chart-databyindex?index=NIFTY%20BANK&indices=true"


setInterval(()=>{
    market_data(marketStatusUrl)
    nifty_opt(nifOptUrl),
    banknifty_opt(bnknifOptUrl),
    nifty50_data(nifty50OptUrl),
    nifty_chart(nifChartUrl),
    banknifty_chart(bnknifChartUrl)
},2000)
