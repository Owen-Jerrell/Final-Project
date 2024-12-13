function bloonsdesc() {
    var desc = document.createElement("p");
    var div = document.getElementById("bloonsIcon");
    desc.innerHTML = "Pop as many bloons as you can before they reach the end! Be careful, if you let too many through, it's game over.";
    desc.classList.add("centered");
    desc.classList.add("desc");
    div.appendChild(desc);
}
function flydesc() {
    var desc = document.createElement("p");
    var div = document.getElementById("flyIcon");
    desc.innerHTML = "This little penguin is determined to prove scientists wrong. Help him prepare to fly beyond time and space in a fun progression-style game of aerodynamics.";
    desc.classList.add("centered");
    desc.classList.add("desc");
    div.appendChild(desc);
}
function isaacdesc() {
    var desc = document.createElement("p");
    var div = document.getElementById("isaacIcon");
    desc.innerHTML = "This game needs little introduction. As one of the best indie games of all time, it is instantly recognizable. Though not as fleshed out, the game is still hours upon hours of fun.";
    desc.classList.add("centered");
    desc.classList.add("desc");
    div.appendChild(desc);
}
function mariodesc() {
    var desc = document.createElement("p");
    var div = document.getElementById("marioIcon");
    desc.innerHTML = "This 2D platformer is an incredible adaptation of the Super Mario franchise made inside of the Flash engine. It finally brings F.L.U.D.D back in the best way possible and is right at home with other Mario games.";
    desc.classList.add("centered");
    desc.classList.add("desc");
    div.appendChild(desc);
}
function bloons() {
    var ruffle = document.createElement("embed");
    var div = document.getElementById("bloonsWindow");
    var button = document.getElementById("bloonsButton");
    ruffle.classList.add("window");
    ruffle.src = "https://drive.google.com/file/d/1JYyDFuBC_dxQpWQbkQSLHXF1yJAi4Z_4/view?usp=sharing";
    div.insertBefore(ruffle, button);
    button.remove();
}
function learn2fly() {
    var ruffle = document.createElement("embed");
    var div = document.getElementById("flyWindow");
    var button = document.getElementById("flyButton");
    ruffle.classList.add("window");
    ruffle.src = "https://drive.google.com/file/d/1E_C16woY0DvZAvIJzpMTzkECNlqQ0ehG/view?usp=sharing";
    div.insertBefore(ruffle, button);
    button.remove();
}
function isaac() {
    var ruffle = document.createElement("embed");
    var div = document.getElementById("isaacWindow");
    var button = document.getElementById("isaacButton");
    ruffle.classList.add("window");
    ruffle.src = "https://drive.google.com/file/d/1sESKDd_1F_uSajgUJNpVGsxCSeyWI0iv/view?usp=sharing";
    div.insertBefore(ruffle, button);
    button.remove();
}
function mario63() {
    var ruffle = document.createElement("embed");
    var div = document.getElementById("marioWindow");
    var button = document.getElementById("marioButton");
    ruffle.classList.add("window");
    ruffle.src = "https://drive.google.com/file/d/11xu3VcJfLX1B_7fHB5EnLx8SpoHOdIxa/view?usp=sharing";
    div.insertBefore(ruffle, button);
    button.remove();
}
function deletedesc() {
    var descr = document.getElementsByClassName("desc");
    while(descr.length > 0) {
        descr[0].parentNode.removeChild(descr[0]);
    }
}
