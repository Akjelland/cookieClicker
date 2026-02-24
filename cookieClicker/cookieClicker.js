const clickCookie = document.getElementById("cookieClicker");
const outputValue = document.getElementById("result");
const moreClicks = document.getElementById("moreClicks");
const grandmaClicks = document.getElementById("grandmaClicks");
const farmClicks = document.getElementById("farmClicks");
const portalClicks = document.getElementById("portalClicks")
const counters = document.querySelectorAll(".counters")
const cost = document.querySelectorAll(".cost")
const cps = document.getElementById("cps")

let cookies = 0; 
let clickPower = 1; 
let grandmas = 0;  
let factory = 0
let farm = 0;
let portal = 0;
let totalCPS = 0;


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
        updateDisplay();
        counters[0].textContent=`Total Click power: ${clickPower}`
        cost[0].textContent = `Cost of Next Click Power: ${Math.floor(basecost * Math.pow(clickPower, 1.15))}`;
    }
});

grandmaClicks.addEventListener("click", function () {
    let basecost=10
    const upgradeCost = Math.floor(grandmas===0 ? basecost: (basecost * Math.pow(grandmas+1,1.15)))

    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        grandmas += 1;
        totalCPS += 1;
        updateCPS()
        updateDisplay();
        counters[1].textContent=`Total Grandmas: ${grandmas}`
        cost[1].textContent=`Cost of Next Grandma: ${Math.floor(basecost * Math.pow(grandmas+1, 1.15))}`
    } 
});

factoryClicks.addEventListener("click", function () {
    let basecost=500
    const upgradeCost = factory===0 ? basecost: (basecost * Math.pow(factory+1,1.15))

    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        factory += 1;
        totalCPS += 10;
        updateCPS()
        updateDisplay();
        counters[3].textContent=`Total Factorys: ${factory}`
        cost[3].textContent=`Cost of Next Factory: ${Math.floor(basecost * Math.pow(factory+1, 1.15))}`
    }
});


farmClicks.addEventListener("click", function () {
    let basecost=100
    const upgradeCost = farm===0 ? basecost: (basecost * Math.pow(farm+1,1.15))

    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        farm += 1;
        totalCPS +=5;
        updateCPS()
        updateDisplay();
        counters[2].textContent=`Total Farms: ${farm}`
        cost[2].textContent=`Cost of Next Farm: ${Math.floor(basecost * Math.pow(farm+1, 1.15))}`
    }
});

portalClicks.addEventListener("click", function () {
    let basecost=1000
    const upgradeCost = portal===0 ? basecost: (basecost * Math.pow(portal+1,1.15))

    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        portal += 1;
        totalCPS +=50;
        updateCPS()
        updateDisplay();
        counters[4].textContent=`Total Portals: ${portal}`
        cost[4].textContent=`Cost of Next Portal: ${Math.floor(basecost * Math.pow(portal+1, 1.15))}`
    }
});



function produceCookies() {
    cookies += grandmas;
    cookies += farm*5;
    cookies += factory*10;
    cookies += portal*50;
    updateDisplay();
}


setInterval(produceCookies, 1000);