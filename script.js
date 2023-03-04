const gameIds = ["0hh1", "0hn0", "1On1Soccer", "2048", "3dtanks", "achievementUnlocked", "achievementUnlocked2", "achievementUnlocked3", "alienhominid", "amidstthesky", "amongus", "animatorvsanimation", "asteroids", "astray", "awesomeCars", "awesomePirates", "awesomePlanes", "ballisticChickens", "basketbros", "battlePanic", "blue", "bobTheRobber", "burnoutDrift3", "catNinja", "championIsland", "chess", "chillRadio", "chromeDino", "circus", "classicMinecraft", "clickerHeroes", "cookieclicker", "cubefield", "customTetris", "dbzdevolution", "doodleJump", "driftHunters", "duckLifeAdventure", "eaglercraft", "edgesurf", "eggyCar", "elasticMan", "fancyPantsAdventure", "flappybird", "fluidSimulation", "fnaf", "fnaw", "fnf", "gba", "grindcraft", "googleSnake", "hackerTyper", "hexgl", "hextris", "htmledit", "impossibleQuiz", "impossibleQuiz2", "infinetemario", "jackSmith", "littleAlchemy", "madalinCars2", "madalinCars3", "mineBlocks", "minekhan", "moonlander", "msFlight", "n-gon", "pacman", "pacman3d", "paperio2", "pico8", "poom", "powderGame", "raftWars", "raftWars2", "retroBowl", "riddleSchool", "riddleSchool2", "riddleSchool3", "riddleSchool4", "riddleSchool5", "riddleTransfer", "riddleTransfer2", "rocketSoccer", "ruffleDemo", "run2", "run3", "slope", "sm64", "spaceCadetPinball", "spelunky", "spinningRat", "ssf", "subwaySurfers", "tabhider", "tableTanks", "tankTrouble2", "templeRun2", "tetris", "tinyFishing", "typewriter", "veryNormalShooter", "vex3", "vex4", "vex-5", "vex6", "vmlinux", "wallSmash", "wbwwb", "weaveSilk", "webRetro", "wordle", "worldsHardestGame"];
const gameNames = ["0hh1", "0hn0", "1 On 1 Soccer", "2048", "3d Tanks", "Achievement Unlocked", "Achievement Unlocked 2", "Achievement Unlocked 3", "Alien hominid", "Amidst the Sky", "Among Us Singleplayer", "Animator vs Animation", "Asteroids", "Astray", "Awesome Cars", "Awesome Pirates", "Awesome Planes", "Ballistic Chickens", "Basket Bros", "Battle Panic", "Blue", "Bob The Robber", "Burnout Drift 3", "Cat Ninja", "Google Champion Island", "Chess", "Chill Radio", "Google Chrome Dinosaur Game", "Circus", "Classic Minecraft", "Clicker Heroes", "Cookie Clicker", "Cubefield", "Custom Tetris", "Dragon Ball Devolution", "Doodle Jump", "Drift Hunters", "Duck Life Adventure", "Eaglercraft", "Microsoft Edge Surf", "Eggy Car", "Elastic Man", "Fancy Pants Adventure", "Flappy Bird", "Fluid Simulation", "Five Nights At Freddy's", "Five Nights at Winston's", "Friday Night Funkin", "Gameboy Advance Emulator", "Grind Craft", "Google Snake", "Hacker Typer", "Hex GL", "Hextris", "HTML editor", "Impossible Quiz", "Impossible Quiz 2", "Infinite Mario", "Jacksmith", "Little Alchemy", "Madalin Stunt Cars 2", "Madalin Stunt Cars Multiplayer", "Mine Blocks", "Minekhan", "Moon Lander", "Microsoft Flight Simulator 1-4", "n-gon", "Pac-Man", "Pac-Man 3d", "Paper.io 2", "Pico-8", "Poom", "Powder Game2 ", "Raft Wars", "Raft Wars 2", "Retro Bowl", "Riddle Shool", "Riddle School 2", "Riddle School 3", "Riddle School 4", "Riddle School 5", "Riddle Transfer", "Riddle Transfer 2", "Rocket Soccer", "Ruffle (Flash Emulator)", "Run 2", "Run 3", "Slope", "Super Mario 64", "Space Cadet Pinball", "Spelunky", "Spinning Rat", "Super Smash Flash", "Subway Surfers", "tabhider", "Table Tanks", "Tank Trouble 2", "Temple Run 2", "Tetris", "Tiny Fishing", "Typewriter", "Very Normal Shooter", "Vex 3", "Vex 4", "Vex 5", "Vex 6", "Linux Virtual Machine", "Wall Smash", "We Become What We Behold", "Weavesilk", "Web Retro", "Wordle", "World's Hardest Game"];
const imgs = ["0hh1.png", "0hn0.png", "1On1Soccer.webp", "2048.png", "3dtanks.jpg", "achievementUnlocked.jpg", "achievementUnlocked2.png", "achievementUnlocked3.png", "alienhominid.jpg", "amidstthesky.jpg", "amongus.jpg", "animatorvsanimation.jpg", "asteroids.jpg", "astray.png", "awesomeCars.jpg", "awesomePirates.jpg", "awesomePlanes.jpg", "ballistic-chickens.png", "basketbros.jpg", "battlePanic.jpg", "blue.png", "bobTheRobber.jpg", "burnout-drift-3.jpg", "catNinja.png", "championisland.jpg", "chess.jpg", "chillradio.jpg", "chromedino.jpg", "circus.jpg", "classicminecraft.png", "clickerHeroes.jpg", "cookieclicker.png", "cubefield.jpg", "customtetris.jpg", "dbzdevolution.jpg", "doodlejump.png", "drifthunters.png", "duckLifeAdventure.jpg", "eaglercraft.png", "edgesurf.png", "eggyCar.jpg", "elasticman.jpg", "fancyPantsAdventure.jpg", "flappybird.png", "fluidsimulation.png", "fnaf.jpeg", "fnaw.jpg", "fnf.jpg", "gba.jpg", "grindcraft.png", "gsnake.png", "hackertyper.png", "hexgl.png", "hextris.png", "htmledit.jpg", "impossiblequiz.jpg", "impossibleQuiz2.jpg", "infinitemario.jpg", "jackSmith.jpg", "littleAlchemy.png", "madalincars2.jpg", "madalincarsmulti.jpg", "mineblocks.png", "minekhan.png", "moonlander.png", "msflight.png", "n-gon.png", "pacman.jpg", "pacman3d.jpeg", "paperio2.png", "pico8.png", "poom.png", "powdergame.jpeg", "raftWars.jpg", "raftWars2.jpg", "retrobowl.jpg", "riddleschool.png", "riddleschool2.png", "riddleschool3.png", "riddleschool4.png", "riddleschool5.png", "riddletransfer.png", "riddletransfer2.png", "rocketSoccer.jpg", "ruffle.png", "run2.jpg", "run3.webp", "slope.jpg", "sm64.jpg", "spacecadetpinball.jpg", "spelunky.jpg", "spinningrat.png", "ssf.png", "subwaySurfers.png", "tabhidder.png", "tableTanks.webp", "tanktrouble2.jpg", "templerun2.jpeg", "tetris.jpg", "tiny-fishing.png", "typewriter.jpeg", "veryNormalShooter.png", "vex-3.jpg", "vex4.jpg", "vex-5.jpg", "vex6.jpg", "vmlinux.png", "wallsmash.png", "wbwwb.png", "weavesilk.jpg", "webretro.png", "wordle.jpg", "hardestgame.jpg"]
var popGames = [];
if (window.self == window.top) {
    var a = window.open("about:blank", "_blank");
    a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin: 0;}</style><body><iframe id="frame" style="height:100%; width:100%; top:0px; left:0px; position:absolute;  z-index:1;" src="' + window.location.href + '" frameborder="0"></iframe></body></html>';
    if (a != null) {
        window.open('https://google.com', '_self');
    } else {
        start();
    }
}else{
    start();
}
function start() {
    // Connect to the Socket.io server
    const socket = io('https://api.studymath.ml');
    // Send the 'get_games' event to the server
    socket.emit('get');
    // Listen for the 'games' event from the server
    socket.on('games', (games) => {
        popGames = games;
        console.log(popGames);
        for (i = 0; i < popGames.length; i++) {
            const current = gameIds.find(popGames[i])
            console.log(i + ", " + gameNames[current]);
            document.getElementById("popgames").innerHTML += '<div class="game" style="margin-left:30px;" onclick="aboutBlank(' + "'" + gameIds[current] + "'" + ');"><p>' + gameNames[current] + '</p><img src="/images/' + imgs[current] + '"></div>';
        }
    });
    for (i = 0; i < gameIds.length; i++) {
        console.log(i + ", " + gameNames[i]);
        document.getElementById("games").innerHTML += '<div class="game" onclick="aboutBlank(' + "'" + gameIds[i] + "'" + ');"><p>' + gameNames[i] + '</p><img src="/images/' + imgs[i] + '"></div>';
    }
}
function aboutBlank(gameid) {
    socket.emit('game', gameid);
    var a = window.open("about:blank", "_blank");
    a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin: 0;}</style><body><iframe style="height:100%; width:100%; top:0px; left:0; position:absolute;  z-index:1;" src="https://studymath.ml/games/' + gameid + '/index.html" frameborder="0"></iframe></body></html>';
}
