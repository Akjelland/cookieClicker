const clickCookie = document.getElementById("cookieClicker");
const outputValue = document.getElementById("result");
const moreClicks = document.getElementById("moreClicks");
const grandmaClicks = document.getElementById("grandmaClicks");
const farmClicks = document.getElementById("farmClicks");
const portalClicks = document.getElementById("portalClicks");
const counters = document.querySelectorAll(".counters");
const cost = document.querySelectorAll(".cost");
const cps = document.getElementById("cps");
const bar = document.getElementById("progressBar");
const upgrade1st = document.getElementById("upgrade1st");
const upgrade1 = document.querySelectorAll(".upgrade1");
const upgrade2nd = document.getElementById("upgrade2nd");
const upgrade2 = document.querySelectorAll(".upgrade2");
const upgrade3rd = document.getElementById("upgrade3rd")
const upgrade3 = document.querySelectorAll(".upgrade3")
const upgrade4th = document.getElementById("upgrade4th")
const upgrade4 = document.querySelectorAll(".upgrade4")

let filled = false;
let cookies = 0; 
let clickPower = 1; 
let grandmas = 0;  
let factory = 0
let farm = 0;
let portal = 0; 
let totalCPS = 0;
let unlockGrandma = 0;
let grandmaPower = 1;
let factoryPower = 1;
let farmPower = 1;
let portalPower = 1;

function loopthrough(loopedvar) {
    for (let i=0;i<loopedvar.length;i++) {
        loopedvar[i].classList.toggle("test")
        loopedvar[i].textContent="";
    }
}

function updateDisplay() {
    outputValue.textContent = Math.floor(cookies);
}
function updateCPS() {
    cps.textContent = `Total CPS: ${Math.floor(totalCPS)}`;
}


clickCookie.addEventListener("click", function () {
    cookies += clickPower;
    updateDisplay();
});

moreClicks.addEventListener("click", function () {
    basecost=5
    const upgradeCost = Math.floor(clickPower===0 ? basecost: (basecost * Math.pow(clickPower,1.15))); 
    
    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        clickPower += 1;
        unlockGrandma +=1;
        updateDisplay();
        counters[0].textContent=`Total Click power: ${clickPower}`
        cost[0].textContent = `Cost of Next Click Power: ${Math.floor(basecost * Math.pow(clickPower, 1.15))}`;
    }
});

grandmaClicks.addEventListener("click", function () {
    let basecost=100
    const upgradeCost = Math.floor(grandmas===0 ? basecost: (basecost * Math.pow(grandmas+1,1.15)))

    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        grandmas += 1;
        updateCPS()
        updateDisplay();
        counters[1].textContent=`Total Grandmas: ${grandmas}`
        cost[1].textContent=`Cost of Next Grandma: ${Math.floor(basecost * Math.pow(grandmas+1, 1.15))}`
    } 
});

factoryClicks.addEventListener("click", function () {
    let basecost=1500
    const upgradeCost = factory===0 ? basecost: (basecost * Math.pow(factory+1,1.15))

    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        factory += 1;
        updateCPS()
        updateDisplay();
        counters[3].textContent=`Total Factorys: ${factory}`
        cost[3].textContent=`Cost of Next Factory: ${Math.floor(basecost * Math.pow(factory+1, 1.15))}`
    }
});


farmClicks.addEventListener("click", function () {
    let basecost=500
    const upgradeCost = farm===0 ? basecost: (basecost * Math.pow(farm+1,1.15))

    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        farm += 1;
        updateCPS()
        updateDisplay();
        counters[2].textContent=`Total Farms: ${farm}`
        cost[2].textContent=`Cost of Next Farm: ${Math.floor(basecost * Math.pow(farm+1, 1.15))}`
    }
});

portalClicks.addEventListener("click", function () {
    let basecost=5000
    const upgradeCost = portal===0 ? basecost: (basecost * Math.pow(portal+1,1.15))

    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        portal += 1;
        updateCPS();
        updateDisplay();
        counters[4].textContent=`Total Portals: ${portal}`
        cost[4].textContent=`Cost of Next Portal: ${Math.floor(basecost * Math.pow(portal+1, 1.15))}`
    }
});



function addUpgrade(cost=10000,powerSys=grandmaPower,upgradeVar=upgrade1st,loopedVar=upgrade1) {
    upgradeVar.addEventListener("click", function(){
        if (cookies >= cost) {
            cookies -= cost;
            powerSys*=2;
            updateCPS();
            updateDisplay();
            calcTotalCPS();
            loopthrough(loopedVar);
            upgradeVar.remove()
        }
})}

function makeCookieProgressBar() {
    if (totalCPS>0) {
        bar.className="progress-bar"
        if (!filled) {
            bar.style.width = "125%";
            filled = true;
        } else {
            bar.style.width = "0%";
            filled = false;
        }
}}

function calcTotalCPS() {
    totalCPS=((grandmas*grandmaPower)+(farm*5*farmPower)+(factory*20*factoryPower)+(portal*100*portalPower))
    updateCPS()
}
// cheat sheet cost=10000,powerSys=grandmaPower,upgradeVar=firstUpgrade,loopedVar=upgrade1
function produceCookies() {
    cookies += (grandmas*grandmaPower);
    cookies += (farm*5*farmPower);
    cookies += (factory*20*factoryPower);
    cookies += (portal*100*portalPower);
    updateDisplay();
    calcTotalCPS();
}
cookies+=10000000
addUpgrade();
addUpgrade(50000,farmPower,upgrade2nd,upgrade2);
addUpgrade(200000,factoryPower,upgrade3rd,upgrade3);
addUpgrade(800000,portalPower,upgrade4th,upgrade4);
setInterval(produceCookies, 1000);
setInterval(makeCookieProgressBar, 500);