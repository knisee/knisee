let defBG = "rgba(238, 217, 25, 0)";

function nav(navi) {
    navi.style.backgroundColor = "black";
}

function nav2(navi) {
    navi.style.backgroundColor = defBG;
}

function displayPic() {
    let image = document.getElementById("imageDiv");
    if (image.style.display === "none") {
        image.style.display = "flex";
    }
    else {
        image.style.display = "none";
    }
}