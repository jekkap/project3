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
    const end = document.getElementById("endBtn");
    const videoPlayer = document.querySelector(".videoPlayer");

    play.addEventListener("click", (e) => {
        videoPlayer.play();
    });

    pause.addEventListener("click", (e) => {
        videoPlayer.pause();
    });

    mute.addEventListener("click", (e) => {
        videoPlayer.muted = true;
    });

    unmute.addEventListener("click", (e) => {
        videoPlayer.muted = false;
    });

    nrmlSpd.addEventListener("click", (e) => {
        videoPlayer.playbackRate = 1;
    });

    fastForward.addEventListener("click", (e) => {
        videoPlayer.playbackRate = 2;
    });

    slowMotion.addEventListener("click", (e) => {
        videoPlayer.playbackRate = 0.5;
    });

    begin.addEventListener("click", (e) => {
        videoPlayer.currentTime = 0;
    });

    end.addEventListener("click", (e) => {
        videoPlayer.currentTime = 100;
    });

    videoPlayer.addEventListener("timeupdate", (e) => {

    });
}

//Adds functionailty to right grid for cuepoints
const videoPlayer = document.querySelector(".videoPlayer")
const rGridDiv = document.createElement("div");
const rightGrid = document.querySelector(".rightGrid");
rGridDiv.innerHTML = '<div><img class="cuepointImg" src="images/questionmark.png"></div>';
rightGrid.append(rGridDiv);

videoPlayer.addEventListener("timeupdate", (e) => {

    if (videoPlayer.currentTime === 0) {
    rGridDiv.innerHTML = '<div><img class="cuepointImg" src="images/questionmark.png"></div>';
    rightGrid.append(rGridDiv);
    } 

    if (videoPlayer.currentTime > 9) {
        rGridDiv.innerHTML = '<div><img class="cuepointImg" src="images/landfill.png"></div>';
        rightGrid.append(rGridDiv);
    }

    if (videoPlayer.currentTime > 15) {
        rGridDiv.innerHTML = '<div><img class="cuepointImg" src="images/cells.webp"></div>';
        rightGrid.append(rGridDiv);
    }

    if (videoPlayer.currentTime > 20) {
        rGridDiv.innerHTML = '<div><img class="cuepointImg" src="images/marriage.jpg"></div>';
        rightGrid.append(rGridDiv);
    }

    if (videoPlayer.currentTime > 26) {
        rGridDiv.innerHTML = '<div><img class="cuepointImg" src="images/baby.jpg"></div>';
        rightGrid.append(rGridDiv);
    }

    if (videoPlayer.currentTime > 28) {
        rGridDiv.innerHTML = '<div><img class="cuepointImg" src="images/neurons.webp"></div>';
        rightGrid.append(rGridDiv);
    }

    if (videoPlayer.currentTime > 32) {
        rGridDiv.innerHTML = '<div><img class="cuepointImg" src="images/quadrillion.jpg"></div>';
        rightGrid.append(rGridDiv);
    }

    if (videoPlayer.currentTime > 35) {
        rGridDiv.innerHTML = '<div><img class="cuepointImg" src="images/water.webp"></div>';
        rightGrid.append(rGridDiv);
    }

    if (videoPlayer.currentTime > 43) {
        rGridDiv.innerHTML = '<div><img class="cuepointImg" src="images/energy.jpg"></div>';
        rightGrid.append(rGridDiv);
    }

    if (videoPlayer.currentTime > 50) {
        rGridDiv.innerHTML = '<div><img class="cuepointImg" src="images/solarsystem.png"></div>';
        rightGrid.append(rGridDiv);
    }

    if (videoPlayer.currentTime > 55) {
        rGridDiv.innerHTML = '<div><img class="cuepointImg" src="images/asapscience.jpeg"></div>';
        rightGrid.append(rGridDiv);
    }
})


