const clickCookie = document.getElementById("cookieClicker");
const outputValue = document.getElementById("result");
const moreClicks = document.getElementById("moreClicks");
const grandmaClicks = document.getElementById("grandmaClicks");
const farmClicks = document.getElementById("farmClicks");
const counters = document.querySelectorAll(".counters")
const cost = document.querySelectorAll(".cost")

let cookies = 0; 
let clickPower = 1; 
let grandmas = 0;  
let factory = 0
let farm = 0;


function updateDisplay() {
    outputValue.textContent = Math.floor(cookies);
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
        updateDisplay();
        counters[2].textContent=`Total Farms: ${farm}`
        cost[2].textContent=`Cost of Next Farm: ${Math.floor(basecost * Math.pow(farm+1, 1.15))}`
    }
});



function produceCookies() {
    cookies += grandmas;
    cookies += farm*5;
    cookies += factory*10;
    updateDisplay();
}

setInterval(produceCookies, 1000);