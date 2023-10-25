document.addEventListener('DOMContentLoaded', init);

function init() {
    //Adds Buttons to Page
    const videoButtons = document.createElement("div");
    const videoControls = document.querySelector(".videoContainer")
    videoButtons.innerHTML = '<div class="intbuttons"><button id="playBtn">Play</button><button id="pauseBtn">Pause</button><button id="muteBtn">Mute</button><button id="unmuteBtn">Unmute</button></div><div class="playbackbuttons"><button id="nrmlSpdBtn">Normal Speed</button><button id="ffBtn">Fast Forward</button><button id="slowMoBtn">Slow Motion</button></div><div class="startendbuttons"><button id="beginBtn">Beginning</button><button id="endBtn">End</button></div>'
    videoControls.append(videoButtons);

    //Media Buttons
    const play = document.getElementById("playBtn");
    const pause = document.getElementById("pauseBtn");
    const mute = document.getElementById("muteBtn");
    const unmute = document.getElementById("unmuteBtn");
    const nrmlSpd = document.getElementById("nrmlSpdBtn");
    const fastForward = document.getElementById("ffBtn");
    const slowMotion = document.getElementById("slowMoBtn");
    const begin = document.getElementById("beginBtn");
    const end = document.getElementById("endBtn")

    play.addEventListener("click", playVideo);
    pause.addEventListener("click", pauseVideo);
    mute.addEventListener("click", muteVideo);
    unmute.addEventListener("click", unmuteVideo);
    nrmlSpd.addEventListener("click", nrmlSpdVideo);
    fastForward.addEventListener("click", fastForwardVideo);
    slowMotion.addEventListener("click", slowMotionVideo);
    begin.addEventListener("click", beginVideo);
    end.addEventListener("click", endVideo);

}


function playVideo() {
    const videoPlayer = document.querySelector(".videoPlayer");
    videoPlayer.play();
}

function pauseVideo() {
    const videoPlayer = document.querySelector(".videoPlayer");
    videoPlayer.pause();
}

function muteVideo() {
    const videoPlayer = document.querySelector(".videoPlayer");
    videoPlayer.muted = true;
}

function unmuteVideo() {
    const videoPlayer = document.querySelector(".videoPlayer");
    videoPlayer.muted = false;
}

function nrmlSpdVideo() {
    const videoPlayer = document.querySelector(".videoPlayer");
    videoPlayer.playbackRate = 1;
}

function fastForwardVideo() {
    const videoPlayer = document.querySelector(".videoPlayer");
    videoPlayer.playbackRate = 2;
}

function slowMotionVideo() {
    const videoPlayer = document.querySelector(".videoPlayer");
    videoPlayer.playbackRate = 0.5;
}

function beginVideo() {
    const videoPlayer = document.querySelector(".videoPlayer");
    videoPlayer.currentTime = 0;
}

function endVideo() {
    const videoPlayer = document.querySelector(".videoPlayer");
    videoPlayer.currentTime = 100;
}