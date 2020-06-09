var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0%";
    } else {
        document.getElementById("navbar").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
}

let adjust_top = function () {
    document.getElementById("content").style.paddingTop = document.getElementById("navbar").offsetHeight + "px";
    console.log("executed");
};

window.onload = () => {
    adjust_top();
    setTimeout(adjust_top, 150);
};

window.onresize = () => {
    setTimeout(adjust_top, 150);
};


document.querySelector("#navbar a").addEventListener("transitionend", () => {
        setTimeout(adjust_top, 150);
    }
);