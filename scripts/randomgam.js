// random gam thing

var list = [
    "https://agentn86.github.io/epicbossbattle/v1.3.3/",
    "https://taco-eating-truck.glitch.me/index.html",
    "https://coincollecor.glitch.me/index.html",
    "https://agentn86.github.io/agentsgams/gams/3dmaze.html",
    "https://agentn86.github.io/agentsgams/gams/alienshooter.html",
    "https://julianyaman.github.io/bitcoin-clicker/",
    "https://steamcookieclicker.github.io/",
    "https://agentn86.github.io/agentsgams/gams/basketballstars",
    "https://agentn86.github.io/agentsgams/gams/slope",
    "https://agentn86.github.io/agentsgams/gams/timeshooter3",
    "https://agentn86.github.io/agentsgams/gams/flash/ageofwar",
    "https://agentn86.github.io/agentsgams/gams/flash/ageofwar2",
    "https://agentn86.github.io/agentsgams/gams/flash/alienhom",
    "https://agentn86.github.io/agentsgams/gams/flash/bloontd5",
    "https://agentn86.github.io/agentsgams/gams/flash/bloxorz",
    "https://agentn86.github.io/agentsgams/gams/flash/deepersleep",
    "https://agentn86.github.io/agentsgams/gams/flash/deepsleep",
    "https://agentn86.github.io/agentsgams/gams/flash/ducklife",
    "https://agentn86.github.io/agentsgams/gams/flash/fancypants",
    "https://agentn86.github.io/agentsgams/gams/flash/fireboywatergirl",
    "https://agentn86.github.io/agentsgams/gams/flash/impossiblequiz",
    "https://agentn86.github.io/agentsgams/gams/flash/impossiblequiz2",
    "https://agentn86.github.io/agentsgams/gams/flash/insaneorb",
    "https://agentn86.github.io/agentsgams/gams/flash/interactivebuddy",
    "https://agentn86.github.io/agentsgams/gams/flash/interactivebuddy2",
    "https://agentn86.github.io/agentsgams/gams/flash/papaburger",
    "https://agentn86.github.io/agentsgams/gams/flash/papaCheese",
    "https://agentn86.github.io/agentsgams/gams/flash/papaCupcake",
    "https://agentn86.github.io/agentsgams/gams/flash/papaDonut",
    "https://agentn86.github.io/agentsgams/gams/flash/papafreezer",
    "https://agentn86.github.io/agentsgams/gams/flash/papaHotDog",
    "https://agentn86.github.io/agentsgams/gams/flash/papapancake",
    "https://agentn86.github.io/agentsgams/gams/flash/papaPastaria",
    "https://agentn86.github.io/agentsgams/gams/flash/papapizzera",
    "https://agentn86.github.io/agentsgams/gams/flash/papaScooperia",
    "https://agentn86.github.io/agentsgams/gams/flash/papaSushiria",
    "https://agentn86.github.io/agentsgams/gams/flash/papaTacoMia",
    "https://agentn86.github.io/agentsgams/gams/flash/papaWingeria",
    "https://agentn86.github.io/agentsgams/gams/flash/portalflash",
    "https://agentn86.github.io/agentsgams/gams/flash/run2",
    "https://agentn86.github.io/agentsgams/gams/flash/sm63",
    "https://agentn86.github.io/agentsgams/gams/flash/tosstheturtle",
    "https://agentn86.github.io/agentsgams/gams/flash/wastedsky",
    "https://agentn86.github.io/agentsgams/gams/flash/whackboss",
    "https://agentn86.github.io/agentsgams/gams/flash/whackcomputer",
    "https://agentn86.github.io/agentsgams/gams/flash/worldhardgame"
]

function randomgam() {
    const link = list[Math.floor(Math.random() * list.length)];
    window.location.replace(link)
}

function openWindow() {
    var win = window.open()
}