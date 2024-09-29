function createItem(game, formatted, link, image, color, description, iframe) {
    var template = `
    <br>
    <div style="display: flex; align-items: top;">
        <a name="${game}"></a>
        <a href="${link}" style="color:transparent;">&nbsp;&nbsp;<img src="${image}" alt="${game}" width="100" style="border: 3px solid ${color};"></a><span class="title">&nbsp;&nbsp;<a style="color: white; cursor: pointer;" href="${link}">${formatted}</a></span>
        <p1>&nbsp;${description}</p1>
    </div>
    `

    var template_iframe = `
    <br>
    <div style="display: flex; align-items: top;">
        <a name="${game}"></a>
        <a onclick="openWindow('${link}', '${formatted}')" style="cursor:pointer;">&nbsp;&nbsp;<img src="${image}" alt="${game}" width="100" style="border: 3px solid ${color};"></a><span class="title">&nbsp;&nbsp;<u><a style="color: white; cursor: pointer;" onclick="openWindow('${link}', '${formatted}')">${formatted}</a></u></span>
        <p1>&nbsp;${description}</p1>
    </div>
    `

    if (iframe == true) {
        document.getElementById('gamList').innerHTML = document.getElementById('gamList').innerHTML + template_iframe
    } else {
        document.getElementById('gamList').innerHTML = document.getElementById('gamList').innerHTML + template
    }

}

createItem("epicbossbattle", "Epic Boss Battle", "https://agentn86.github.io/epicbossbattle/v1.3.3/", "https://agentn86.github.io/epicbossbattle/v1.3.3/loading.png", "pink", "is a tough, rage gam where you have to avoid and end a spaceship without dying in the process! Use the retry button to restart the game when needed.")
createItem("smnake", "SMnake", "https://taco-eating-truck.glitch.me/index.html", "./comingsoon.png", "pink", "is a simple gam where you will forever collect meat with no objective! Passes time away... Use the controls on the top right to play.")
createItem("coincollector", "Coin Collector", "https://coincollecor.glitch.me/index.html", "./comingsoon.png", "pink", "is a simple gam where you will have to collect as much money as you can. Use the controls on the bottom to play.")
createItem("3dmaze", "3D Maze", "./gams/3dmaze.html", "./thumbs/3dmaze.svg", "pink", "is a simple maze gam where you have to find the exit! Use WASD to move and left and right arrows to look around. Try finding the green flag to win.")
createItem("alienshooter", "Alien Shooter", "./gams/alienshooter.html", "./thumbs/alienshooter.png", "pink", "is a simple shooter gam where the user has to shoot the alien. The more you shoot- the faster it is! Use mouse to shoot.")
createItem("bitcoin-clicker", "Bitcoin Clicker", "https://julianyaman.github.io/bitcoin-clicker/", "./thumbs/bitcoinclicker.png", "white", "is a 'Cookie Clicker' similar type gam- but instead it's bitcoin!")
createItem("cookie-clicker", "Cookie Clicker", "https://steamcookieclicker.github.io/", "./thumbs/cookieclicker.jpeg", "white", "is exactly what it sounds like. You know what it is- why not play it?")
createItem("papaspizzeria", "Papa's Pizzeria", "./gams/flash/papapizzera.html", "./thumbs/papapizzeria.jpeg", "white", "is the original classic of the Papa gams. Own a pizza business and get the best scores!")
createItem("papasburgeria", "Papa's Burgeria", "./gams/flash/papaburger.html", "./thumbs/papaburger.jpeg", "white", "is one of the sequels to Papa's Pizzeria. Why not give both a try?")
createItem("ageofwar2", "Age of War 2", "./gams/flash/ageofwar2.html", "./thumbs/ageofwar2.jpeg", "white", "is a war simulation gam where you try to win a war aganist a enemy AI!")
createItem("run2", "Run 2", "./gams/flash/run2.html", "./thumbs/run2.jpeg", "white", "is excatly what is sounds like- RUN! You can jump and move around to make it to the next level.")
createItem("whackboss", "Whack your Boss", "./gams/flash/whackboss.html", "./thumbs/whackyourboss.jpeg", "white", "might not the the most family friendly gam out there- but it is sure fun to do something after a rough day.")
createItem("ducklife", "Duck Life", "./gams/flash/ducklife.html", "/thumbs/ducklife.jpeg", "white", "is a gam where you have to train a duck to get your farm back!")
createItem("theimpossiblequiz", "The Impossible Quiz", "./gams/flash/impossiblequiz.html", "./thumbs/impossiblequiz.jpeg", "white", "is a super hard gam with over 100 questions! Can you beat it?")
createItem("worldhardgame", "The World's Hardest Game", "./gams/flash/worldhardgame.html", "./thumbs/worldhardgame.jpeg", "white", "is a super hard gam with a bunch of levels... can you beat it?")
createItem("portaltheflashversion", "Portal: The Flash Version", "./gams/flash/portalflash.html", "./thumbs/portalflash.jpeg", "white", "is the '2D version' of Portal.. can you get through the test chambers?")
createItem("ageofwar", "Age of War", "./gams/flash/ageofwar.html", "./thumbs/ageofwar.jpeg", "white", "is the original version of Age of War 2. Give it a try!")
createItem("papafreezeria", "Papa's Freezeria", "./gams/flash/papafreezer.html", "./thumbs/papafreeze.jpeg", "white", "is another sequal to the Papa franschise. This time- deserts!")
createItem("papapancake", "Papa's Pancakeria", "./gams/flash/papapancake.html", "./thumbs/papapancake.jpeg", "white", "is another sequal to the Papa franschise. This time- pancakes!")
createItem("bloonstd5", "Bloons Tower Defense 5", "./gams/flash/bloontd5.html", "./thumbs/bloonstd5.jpeg", "white", "is a tower defense game where you have to defend your tower- the enemy being balloons!")
createItem("slope", "SLOPE", "./gams/slope", "./thumbs/slope.jpeg", "white", "is a infinite 'runner', so to say... but your a ball!")
createItem("basketballstars", "Basketball Stars", "./gams/basketballstars", "./thumbs/basketballstars.png", "white", "is a co-op/singleplayer basketball gam. Be some of your favorite basketball stars!")
createItem("timeshooter3", "Time Shooter 3", "./gams/timeshooter3", "./thumbs/timeshooter3.png", "white", "is a shooter gam where time moves when YOU move!")
createItem("fancypants", "Fancy Pants Adventures", "./gams/flash/fancypants.html", "./thumbs/fancypantsworld1.png", "white", "is a cool but simple platformer- with many different levels and enemies!")
createItem("alienhom", "Alien Hominid", "./gams/flash/alienhom.html", "./thumbs/alienhom.png", "red", "is when you are the alien and you need to get out of earth before the FBI catches you! Not the most family-friendly, to be certain- but great gam to play after-school.")
createItem("tosstheturtle", "Toss the Turtle", "./gams/flash/tosstheturtle.html", "./thumbs/tosstheturtle.png", "red", "is not that family friendly- but is a funny little cartoon viol. gam where you toss the turtle to get points.")
createItem("bloxorz", "Bloxorz", "./gams/flash/bloxorz.html", "./thumbs/bloxorz.png", "white", "is a puzzle game where you have to fit a rectangle into a square hole- and can get challenging!")
createItem("wastedsky", "Wasted Sky", "./gams/flash/wastedsky.html", "./thumbs/wastedsky.png", "white", "is a point and click game where you need to need to destroy the enemy ships!")
createItem("impossiblequiz2", "The Impossible Quiz 2", "./gams/flash/impossiblequiz2.html", "./thumbs/impossiblequiz2.png", "white", "is the sequal to The Impossible Quiz- even more impossible that can be!")
createItem("whackcomputer", "Whack your Computer", "./gams/flash/whackcomputer.html", "./thumbs/whackcomputer.png", "white", "helps you answer the question- can you feel better after whacking your computer? Find out...")
createItem("papacheese", "Papa's Cheeseria", "./gams/flash/papaCheese.html", "./thumbs/papacheeseria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
createItem("papacupcake", "Papa's Cupcakeria", "./gams/flash/papaCupcake.html", "./thumbs/papacupcakeria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
createItem("papadonut", "Papa's Donut", "./gams/flash/papaDonut.html", "./thumbs/papadonuteria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
createItem("papahotdog", "Papa's Hotdogeria", "./gams/flash/papaHotDog.html", "./thumbs/papahotdogeria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
createItem("papapasteria", "Papa's Pastaria", "./gams/flash/papaPastaria.html", "./thumbs/papapasteria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
createItem("papascooperia", "Papa's Scooperia", "./gams/flash/papaScooperia.html", "./thumbs/papascooperia.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
createItem("papasushi", "Papa's Sushiria", "./gams/flash/papaSushiria.html", "./thumbs/papasusheria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
createItem("papastacomia", "Papa's Taco Mia", "./gams/flash/papaTacoMia.html", "./thumbs/papatacomia.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
createItem("papawing", "Papa's Wingeria", "./gams/flash/papaWingeria.html", "./thumbs/papawingeria.png", "white", "is another spinof to the Papa's gams. Why not give it a try?")
createItem("deepsleep", "Deep Sleep", "./gams/flash/deepsleep.html", "./thumbs/deepsleep.png", "blue", "is a point and click adventure. Can you servive the nightmare?")
createItem("deepersleep", "Deeper Sleep", "./gams/flash/deepersleep.html", "./thumbs/deepersleep.png", "blue", "is the sequel to the point and click adventure, Deep Sleep. Can you servive the nightmare again?")
createItem("sm63", "SM63", "./gams/flash/sm63.html", "./thumbs/sm63.png", "white", "is a mashup of a bunch of Mario gams turned into one original game. Might not be the most copyright friendly- but its a great 'mario' clone, so to say.")
createItem("insaneorb", "Insane Orb", "./gams/flash/insaneorb.html", "./thumbs/insaneorb.jpeg", "white", "is a pong inspired gam, but with a few minor tweaks and abilites!")
createItem("interactivebuddy", "Interactive Buddy", "./gams/flash/interactivebuddy.html", "./thumbs/interactivebuddy.png", "white", "allows you to have your own little best friend. You can have fun with him- or cause pain!")
createItem("interactivebuddy2", "Interactive Buddy 2", "./gams/flash/interactivebuddy2.html", "./thumbs/interactivebuddy2.png", "blue", "is the sequel to Interactive Buddy, which allows you to have your own little best friend. You can have fun with him- or cause pain!")
createItem("fireboywatergirl", "Fireboy & Watergirl in The Forest Temple", "./gams/flash/fireboywatergirl.html", "./thumbs/fireboywatergirl.jpeg", "white", "is a co-op game where the 2 people must escape a temple. Don't let water touch fire and fire touch water- it may not end well!")
createItem("eaglercraft", "Eaglercraft", "https://drive.google.com/uc?export=download&id=1-MduluUms_LG7tUJyMkAPBw82O40R11R", "./thumbs/eaglercraft.png", "green", "is a Minecraft clone based for the web! You can play with friends as well!")
createItem("ssf2", "SSF2", "./gams/flash/ssf2.html", "./thumbs/ssf2.png", "blue", "is a classic flash gam. You should really give it a try!")
createItem("houseofhazards", "House of Hazards", "./gams/houseofhazards/index.html", "./thumbs/houseofhazards.png", "white", "is a platformer gam that you need to get out of the house. But other players can sabotage you on the way!")
/**/createItem("1v1.lol", "1v1.LOL", "https://book-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/mind4ur/WPpluginsync@main/lib/edit/up.xml&container=ig", "./thumbs/1v1lol.png", "white", "is a battle royale type game where you must survive with bots as enemeies. There are many different gamemodes- as well.", true)
createItem("geodash", "GeoDash", "./gams/geodash/index.html", "./thumbs/geodash.png", "white", "is a 1-1 replica to Geomentry Dash. Give it a try, and see if you can bet the hard challenging levels!")
createItem("motox3m", "Moto X3M", "./gams/iframe/motox3m", "./thumbs/motox3m.png", "white", "is a motorcycle game where you have to get around obstables and make it to the end.")
createItem("motox3m2", "Moto X3M 2", "./gams/iframe/motox3m2", "./thumbs/motox3m.png", "white", "is the sequal to Moto X3M, with the same premise.")
createItem("motox3m3", "Moto X3M 3", "./gams/iframe/motox3m3", "./thumbs/motox3m.png", "white", "is the sequal to Moto X3M, with the same premise.")
/**/createItem("bigshotboxing", "Big Shot Boxing", "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://130291037-114506095424113735.preview.editmysite.com/uploads/b/8156145-746889060530413966/files/bsb.xml&container=ig", "./thumbs/bigshotboxing.png", "white", "is a fighting sim where you must be the top in boxing.", true)
/**/createItem("sr3d2", "Snow Rider 3D 2", "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/mind4ur/debugactions@6e97a528bfcdd0623e0cd99ad352baebf47a6b70/sr3d2.xml&container=ig", "./thumbs/snowrider3d.png", "white", "is a infinite runner, but you are on a sliegh! Very challenging, can you get all the presents?", true)
/**/createItem("s2p", "SLOPE 2 Players", "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/vue-tables-2@5eccbd48de60822f1a6d6d605d8c58f317d75b6f/lib/s2p.xml&container=ig", "./thumbs/slope-2-player-logo.jpg", "white", "is a infinite runner by SLOPE, but its for 2 players isntead of 1.", true)
/**/createItem("soccerlegends", "Soccer Legends", "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://728591305-836400173629471539.preview.editmysite.com/uploads/b/139890129-766134333972657537/files/fl.xml&container=ig", "./thumbs/footballlegends.png", "white", "is another type of Basketball Legends, but soccer!", true)
/**/createItem("hellokittyadventure", "Hello Kitty Adventure", "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/8c491f21-7353-4f1f-b2a0-9544824c4d28%2Fhello_kitty_adventure.xml&container=ig", "./thumbs/hellokittyadventure.png", "white", "allows you to inbark in a new adventure in the Hello Kitty universe.", true)
createItem("retrobowl", "Retro Bowl", "./gams/retrobowl/index.html", "./thumbs/retrobowl.avif", "blue", "allows players to enbark on a football journey!")
createItem("flappyplane", "Flappy Plane", "./gams/flappyplane/index.html", "./comingsoon.png", "red", "is a clone of Flappy Bird but with a interesting twist...")
createItem("gunmayhem2", "Gun Mayhem 2", "./gams/flash/gunmayhem2.html", "./comingsoon.png", "white", "is a ultimate battle game! Fire and shoot until you can't no more!")
createItem("minesweeper", "Minesweeper", "https://agentn86.github.io/js-minesweeper/", "./comingsoon.png", "white", "-- a challenging game where you must figure out the mines before they explode you!")
/**/createItem("polytrack", "Polytrack", "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/wergboy/NLP@3cd7c854d047f364125194f75adeaa75aecf7985/pt/pt.xml&container=ig", "./thumbs/polytrack.png", "white", "is a racing game, runs well on basically anything, and is super fun! (Even your own custom editor..)", true)
createItem("driftboss", "Drift Boss", "./gams/driftboss", "./thumbs/driftboss.png", "white", "How long can you last driving your car on a wacky road?")
createItem("eggycar", "Eggy Car", "./gams/eggycar", "./thumbs/eggycar.png", "white", "Keep your egg in your car without dropping!")
createItem("profootball", "Pro Football", "./gams/flash/profootball.html", "./thumbs/profootball.jpg", "white", "Miniclip classic!")
/**/createItem("pixelspeedrun", "Pixel Speedrun", "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://164395038-759385720163048275.preview.editmysite.com/uploads/b/139890129-591973326979111284/files/pisprun.xml&container=ig", "./thumbs/pixelspeedrun.jpg", "white", "makes you get to the end of the tough platform. Try beating your time!", true)
createItem("doom1993", "DooM", "https://diekmann.github.io/wasm-fizzbuzz/doom/", "./thumbs/doom1993.jpg", "white", "is the original classic to DOOM 1993! This is the SHAREWARE version, so there is only one episode. No sound and melting screen as well.", true)
/**/createItem("javelinfighting", "Javelin Fighting", "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gertdoro/Toolkit@894aa24b4a4091c753666d7d000c28479ebca909/Code/Perl/Javelin.xml&container=ig", "./thumbs/javelinfighting.jpg", "white", "makes you fight an AI opponent in a fatal javelin fight!", true)
createItem("bottleflip", "Bottle Flip", "./gams/iframe/bottleflip.html", "./thumbs/bottleflip.png", "white", "makes you traverse a room without making the bottle fall to the ground!", false)
/**/createItem("timeshooter2", "Time Shooter 2", "https://agentn86.github.io/agentgam/gams/xml/timeshooter2.html", "./thumbs/timeshooter2.png", "white", "the second of the Time Shooter saga.", true)
/**/createItem("1on1hockey", "1 on 1 Hockey", "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2F1-on-1-hockey.xml&container=ig", "./thumbs/1on1hockey.png", "white", "is a game where you fight AI in a tough, customizated battle of hockey!", true)
/**/createItem("fnaf", "Five Nights at Freddys", "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Ffive-nights-at-freddy-s.xml&container=ig", "./thumbs/fivenightsatfreddys.png", "white", "is the 2015 classic ported to Flash!", true)
/**/createItem("douchebagworkout2", "Douchebag Workout 2", "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fdouchebag-workout-2.xml&container=ig", "./thumbs/douchebagworkout2.png", "white", "makes you go on an adventure being the fittest person in the world- scratch that- the *douchebagest* person.", true)

// createItem("nowgg", "now.gg unblckr", "https://agents-nowgg.glitch.me/", "./comingsoon.png", "white", "*THIS WILL SOON BE MOVED TO AGENTS TOOLS*")