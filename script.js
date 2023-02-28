if(window.self == window.top){
    var a = window.open("about:blank", "_blank");
    a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin: 0;}</style><body><iframe id="frame" style="height:100%; width:100%; top:0px; left:0px; position:absolute;  z-index:1;" src="' + window.location.href + '" frameborder="0"></iframe><script>var e=document.getElementById("frame");e.addEventListener("load",function(){var t=e.contentWindow.location.href;window.history.pushState({url:t,origin:window.location.origin},"",t)});window.onpopstate = function() {window.location.replace("https://www.studymath.ml/")}; history.pushState({}, "");</script></body></html>';
    if(a == null){
        document.innerHTML = "allow pop ups"
    }else{
     window.close();
    }
}
const gameIds = ["0hh1", "0hn0", "2048", "alienhominid", "amidstthesky", "amongus", "animatorvsanimation", "asteroids", "astray", "awesomePlanes", "ballisticChickens", "basketbros", "blue", "burnoutDrift3", "championIsland", "chess", "chillRadio", "chromeDino", "circus", "classicMinecraft", "clickerHeroes", "cookieclicker", "cubefield", "customTetris", "dbzdevolution", "doodleJump", "driftHunters", "duckLifeAdventure", "eaglercraft", "edgesurf", "elasticMan", "flappybird", "fluidSimulation", "fnaf", "fnaw", "fnf", "gba", "grindcraft", "googleSnake", "hackerTyper", "hexgl", "hextris", "htmledit", "impossibleQuiz", "infinetemario", "jackSmith", "littleAlchemy", "madalinCars2", "madalinCars3", "mineBlocks", "minekhan", "moonlander", "msFlight", "n-gon", "pacman", "pacman3d", "paperio2", "powderGame", "retroBowl", "riddleSchool", "riddleSchool2", "riddleSchool3", "riddleSchool4", "riddleSchool5", "riddleTransfer", "riddleTransfer2", "ruffleDemo", "run3", "slope", "sm64", "spaceCadetPinball", "spelunky", "spinningRat", "ssf", "tabhider", "tankTrouble2", "templeRun2", "tetris", "tinyFishing", "typewriter", "vex3", "vex4", "vex-5", "vex6", "vmlinux", "wallSmash", "wbwwb", "weaveSilk", "webRetro", "wordle", "worldsHardestGame"];
const gameNames = ["0hh1", "0hn0", "2048", "alien hominid", "amidst the sky", "among us", "animator vs animation", "asteroids", "astray", "awesome planes", "ballistic chickens", "basketbros", "blue", "burnout drift 3", "champion island", "chess", "chill radio", "chrome dino", "circus", "classic minecraft", "Clicker Heroes", "cookie clicker", "cube field", "custom tetris", "dbzd evolution", "doodle jump", "drift hunters", "Duck life adventure", "eaglercraft", "edge surf", "elastic man", "flappy bird", "fluid simulation", "fnaf", "fnaw", "fnf", "gba", "grind craft", "google snake", "hacker typer", "hexgl", "hextris", "html edit", "impossible quiz", "infinete mario", "Jack Smith", "Little Alchemy", "madalin cars 2", "madalin cars multiplayer", "mine blocks", "minekhan", "moon lander", "ms flight", "n-gon", "pacman", "pacman 3d", "paper io 2", "powder game", "retro bowl", "riddle school", "riddle school2", "riddle school3", "riddle school4", "riddle school5", "riddle transfer", "riddle transfer2", "ruffle", "Run 3", "slope", "sm64", "space cadet pinball", "spelunky", "spinning rat", "ssf", "tabhider", "tanktrouble2", "templerun2", "tetris", "tiny fishing", "type writer", "vex 3", "vex 4", "vex 5", "vex 6", "linux vm", "wall smash", "we become what we behold", "weave silk", "web retro", "wordle", "worlds hardest game"];
const imgs = ['0hh1.png', '0hn0.png', '2048.png', 'alienhominid.jpg', 'amidstthesky.jpg', 'amongus.jpg', 'animatorvsanimation.jpg', 'asteroids.jpg', 'astray.png', "awesomePlanes.jpg", 'ballistic-chickens.png', 'basketbros.jpg', "blue.png", 'burnout-drift-3.jpg', 'championisland.jpg', 'chess.jpg', 'chillradio.jpg', 'chromedino.jpg', 'circus.jpg', 'classicminecraft.png', "clickerHeroes.jpg", 'cookieclicker.png', 'cubefield.jpg', 'customtetris.jpg', 'dbzdevolution.jpg', 'doodlejump.png', 'drifthunters.png', 'duckLifeAdventure.jpg', 'eaglercraft.png', 'edgesurf.png', 'elasticman.jpg', 'flappybird.png', 'fluidsimulation.png', 'fnaf.jpeg', 'fnaw.jpg', 'fnf.jpg', 'gba.jpg', 'grindcraft.png', 'gsnake.png', 'hackertyper.png', 'hexgl.png', 'hextris.png', 'htmledit.jpg', 'impossiblequiz.jpg', 'infinitemario.jpg', 'jackSmith.jpg', 'littleAlchemy.png', 'madalincars2.jpg', 'madalincarsmulti.jpg', 'mineblocks.png', 'minekhan.png', 'moonlander.png', 'msflight.png', 'n-gon.png', 'pacman.jpg', 'pacman3d.jpeg', 'paperio2.png', 'powdergame.jpeg', 'retrobowl.jpg', 'riddleschool.png', 'riddleschool2.png', 'riddleschool3.png', 'riddleschool4.png', 'riddleschool5.png', 'riddletransfer.png', 'riddletransfer2.png', 'ruffle.png', 'run-3.webp', 'slope.jpg', 'sm64.jpg', 'spacecadetpinball.jpg', 'spelunky.jpg', 'spinningrat.png', 'ssf.png', 'tabhidder.png', 'tanktrouble2.jpg', 'templerun2.jpeg', 'tetris.jpg', 'tiny-fishing.png', 'typewriter.jpeg', 'vex-3.jpg', 'vex4.jpg', 'vex-5.jpg', 'vex6.jpg', 'vmlinux.png', 'wallsmash.png', 'wbwwb.png', 'weavesilk.jpg', 'webretro.png', 'wordle.jpg', 'hardestgame.jpg']
var popGames = [];
// Connect to the Socket.io server
const socket = io('https://api.studymath.ml');
// Send the 'get_games' event to the server
socket.emit('get');
// Listen for the 'games' event from the server
socket.on('games', (games) => {
    popGames = games;
});
for(i = 0; i < gameIds.length; i++){
    console.log(i + ", " + gameNames[i]);
    document.getElementById("games").innerHTML += '<div class="game" onclick="aboutBlank(' + "'" + gameIds[i] + "'" + ');"><p>' + gameNames[i] + '</p><img src="/images/' + imgs[i] + '"></div>';
}
function aboutBlank(gameid){
    socket.emit('game', gameid);
    location.href = window.location.href + "games/" + gameid + "/index.html";

 //var a = window.open("about:blank", "_blank");
    //a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin: 0;}</style><body><script>function back(){window.location.replace("https://www.studymath.ml/");}</script><button position="fixed" style="border-radius:20px; backround-color:black; z-index:100;" onclick="window.location.replace(' + "'https://www.studymath.ml/'" + ');">Back to home</button> <iframe style="height:calc(100% - 20px); width:100%; top:20px; left:0; position:absolute;  z-index:1;" src="' + window.location.href + "games/" + gameid + '/index.html" frameborder="0"></iframe></body></html>';
//window.location.replace("https://classroom.google.com")
}
