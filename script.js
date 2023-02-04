const gameIds = ["0hh1", "0hn0", "2048", "alienhominid", "amidstthesky", "amongus", "animatorvsanimation", "asteroids", "astray", "ballistic-chickens", "basketbros", "burnout-drift-3", "championisland", "chess", "chillradio", "chromedino", "circus", "classicminecraft", "cookieclicker", "cubefield", "customtetris", "dbzdevolution", "doodlejump", "drifthunters", "eaglercraft", "edgesurf", "elasticman", "flappybird", "fluidsimulation", "fnaf", "fnaw", "fnf", "gba", "grindcraft", "gsnake", "hackertyper", "hardestgame", "hexgl", "hextris", "htmledit", "impossiblequiz", "infinetemario", "madalincars2", "madalincarsmulti", "mineblocks", "minekhan", "moonlander", "msflight", "n-gon", "pacman", "pacman3d", "paperio2", "powdergame", "retrobowl", "riddleschool", "riddleschool2", "riddleschool3", "riddleschool4", "riddleschool5", "riddletransfer", "riddletransfer2", "ruffle", "slope", "sm64", "spacecadetpinball", "spelunky", "spinningrat", "ssf", "tabhider", "tanktrouble2", "templerun2", "tetris", "tiny-fishing", "typewriter", "vex-3", "vex4", "vex-5", "vex6", "vmlinux", "wallsmash", "wbwwb", "weavesilk", "webretro", "wordle"];
const gameNames = ["0hh1", "0hn0", "2048", "alien hominid", "amidst the sky", "among us", "animator vs animation", "asteroids", "astray", "ballistic chickens", "basketbros", "burnout drift 3", "champion island", "chess", "chill radio", "chrome dino", "circus", "classic minecraft", "cookie clicker", "cube field", "custom tetris", "dbzd evolution", "doodle jump", "drift hunters", "eaglercraft", "edge surf", "elastic man", "flappy bird", "fluid simulation", "fnaf", "fnaw", "fnf", "gba", "grind craft", "google snake", "hacker typer", "hardest game", "hexgl", "hextris", "html edit", "impossible quiz", "infinete mario", "madalin cars 2", "madalin cars multiplayer", "mine blocks", "minekhan", "moon lander", "ms flight", "n-gon", "pacman", "pacman 3d", "paper io 2", "powder game", "retro bowl", "riddle school", "riddle school2", "riddle school3", "riddle school4", "riddle school5", "riddle transfer", "riddle transfer2", "ruffle", "slope", "sm64", "space cadet pinball", "spelunky", "spinning rat", "ssf", "tabhider", "tanktrouble2", "templerun2", "tetris", "tiny fishing", "type writer", "vex 3", "vex 4", "vex 5", "vex 6", "linux vm", "wall smash", "we become what we behold", "weave silk", "web retro", "wordle"];
const ends = ['png', 'png', 'png', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'png', 'png', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'png', 'png', 'jpg', 'jpg', 'jpg', 'png', 'png', 'png', 'png', 'jpg', 'png', 'png', 'jpeg', 'jpg', 'jpg', 'jpg', 'png', 'png', 'png', 'jpg', 'png', 'png', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'png', 'png', 'png', 'png', 'png', 'jpg', 'jpeg', 'png', 'jpeg', 'jpg', 'png', 'png', 'png', 'png', 'png', 'png', 'png', 'png', 'jpg', 'jpg', 'jpg', 'jpg', 'png', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg'];
for(i = 0; i < gameIds.length; i++){
    document.getElementById("games").innerHTML += '<div class="game" onclick="aboutBlank(' + "'" + gameIds[i] + "'" + ');"><p>' + gameNames[i] + '</p><img src="/images/' + gameIds[i] + "." + ends[i] + '"></div>';
}
function aboutBlank(gameid){
 var a = window.open("about:blank", "_blank");
    a.document.documentElement.innerHTML = '<!DOCTYPE html><html><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png%22%3E<style>body {margin:0;}</style><body><script>window.onpopstate = function() {window.location.replace("https://www.studymath.ml/")}; history.pushState({}, "");</script><iframe height="100%" width="100%" src="' + window.location.href + "games/" + gameid + '/index.html"frameborder="0"></iframe></body></html>';
window.location.replace("https://classroom.google.com")
}
