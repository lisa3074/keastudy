let d1 = document.querySelector("#date1");
let d2 = document.querySelector("#date2");
let d3 = document.querySelector("#date3");
let d21 = document.querySelector("#date21");
let d22 = document.querySelector("#date22");
let d23 = document.querySelector("#date23");
let pil21th = document.querySelector("#pil_date21_th");
let pil22tv = document.querySelector("#pil_date22_tv");
let pil22th = document.querySelector("#pil_date22_th");
let pil23tv = document.querySelector("#pil_date23_tv");
let pil1th = document.querySelector("#pil_date1_th");
let pil2tv = document.querySelector("#pil_date2_tv");
let pil2th = document.querySelector("#pil_date2_th");
let pil3tv = document.querySelector("#pil_date3_tv");

let index = document.querySelector("#index_wrapper");
let materialer = document.querySelector("#materiale_wrapper");
let skema = document.querySelector("#skema_wrapper");
let login = document.querySelector("#login_body");

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    if (login) {
        login.addEventListener("load", loginF());
    }

    if (index) {
        index.addEventListener("load", indexF());
    }

    if (skema) {
        skema.addEventListener("load", iDagSkema());
    }
    if (materialer) {
        materialer.addEventListener("load", iDagMateriale());
    }
}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
        document.querySelector("#menuknap").classList.remove("xfont");
        document.querySelector("#menuknap").classList.add("font");

    } else {
        document.querySelector("#menuknap").classList.remove("font");
        document.querySelector("#menuknap").classList.add("xfont");
        document.querySelector("#menuknap").textContent = "X";
    }
}

function loginF() {
    console.log("loginF");
    document.querySelector("#ani_knap").addEventListener("click", mindre);


    document.querySelector("#ani_knap").addEventListener("click", function () {
        setTimeout(function () {
            location.href = "index.html"
        }, 1500);
    })
}

function mindre() {
    console.log("mindre");
    if (document.querySelector("#kea")) {
        document.querySelector("#kea").classList = "dissolve";
    }
}

function indexF() {
    console.log("indexF");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#menuknap").classList.remove("xfont");
    document.querySelector("#menuknap").classList.add("font");

    document.querySelector("#skema_forside").addEventListener("click", function () {
        document.querySelector("#skema").classList.add("skema_ani");
    })


    document.querySelector("#skema_forside").addEventListener("click", function () {
        setTimeout(function () {
            location.href = "skema.html"
        }, 800);
    })

    document.querySelector("#materiale_forside").addEventListener("click", function () {
        document.querySelector("#docs").classList.add("skema_ani2");
    })


    document.querySelector("#materiale_forside").addEventListener("click", function () {
        setTimeout(function () {
            location.href = "materialer.html"
        }, 800);
    })

    document.querySelector("#kea_logo").addEventListener("mouseover", function () {
        document.querySelector("#kea_logo").classList.add("kea_hover");
    })

    document.querySelector("#kea_logo").addEventListener("mouseout", function () {
        document.querySelector("#kea_logo").classList.remove("kea_hover");
    })
}


//-------------------------------------------------
//                    SKEMA
//-------------------------------------------------

function iDagSkema() {
    console.log("iDagSkema");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#menuknap").classList.remove("xfont");
    document.querySelector("#menuknap").classList.add("font");

    document.querySelector("#kea_logo").addEventListener("mouseover", function () {
        document.querySelector("#kea_logo").classList.add("kea_hover");
    })

    document.querySelector("#kea_logo").addEventListener("mouseout", function () {
        document.querySelector("#kea_logo").classList.remove("kea_hover");
    })

    d1.classList = "hide";
    d3.classList = "hide";
    d2.classList = "";
    pil2th.addEventListener("click", onsdagSkema);
    pil2tv.addEventListener("click", mandagSkema);
}

function mandagSkema() {
    d1.classList = "fadein_left";
    d3.classList = "hide";
    d2.classList = "fadeout_right";
    setTimeout(hideTirsdagOnsdagS, 500);
    pil1th.addEventListener("click", tirsdagSkema);
}

function tirsdagSkema() {
    d1.classList = "fadeout_left";
    d3.classList = "hide";
    d2.classList = "fadein_right";
    setTimeout(hideMandagOnsdagS, 500);
    pil2tv.addEventListener("click", mandagSkema);
    pil2th.addEventListener("click", onsdagSkema);
}

function tirsdagSkema2() {
    d1.classList = "hide";
    d3.classList = "fadeout_right";
    d2.classList = "fadein_left";
    setTimeout(hideMandagOnsdagS, 500);
    pil2tv.addEventListener("click", mandagSkema);
    pil2th.addEventListener("click", onsdagSkema);
}

function onsdagSkema() {
    d1.classList = "hide";
    d3.classList = "fadein_right";
    d2.classList = "fadeout_left";
    setTimeout(hideMandagTirsdagS, 500);
    pil3tv.addEventListener("click", tirsdagSkema2);
}

function hideMandagOnsdagS() {
    d1.classList = "hide";
    d3.classList = "hide";
}

function hideMandagTirsdagS() {
    d1.classList = "hide";
    d2.classList = "hide";
}

function hideTirsdagOnsdagS() {
    d2.classList = "hide";
    d3.classList = "hide";
}

//-------------------------------------------------
//                 MATERIALER
//-------------------------------------------------

function iDagMateriale() {
    console.log("iDagMateriale");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#menuknap").classList.remove("xfont");
    document.querySelector("#menuknap").classList.add("font");

    document.querySelector("#kea_logo").addEventListener("mouseover", function () {
        document.querySelector("#kea_logo").classList.add("kea_hover");
    })

    document.querySelector("#kea_logo").addEventListener("mouseout", function () {
        document.querySelector("#kea_logo").classList.remove("kea_hover");
    })

    d21.classList = "hide";
    d23.classList = "hide";
    d22.classList = "";
    pil22th.addEventListener("click", onsdagMaterialer);
    pil22tv.addEventListener("click", mandagMaterialer);
}

function mandagMaterialer() {
    d21.classList = "fadein_left";
    d23.classList = "hide";
    d22.classList = "fadeout_right";
    setTimeout(hideTirsdagOnsdagM, 500);
    pil21th.addEventListener("click", tirsdagMaterialer);
}

function tirsdagMaterialer() {
    d21.classList = "fadeout_left";
    d23.classList = "hide";
    d22.classList = "fadein_right";
    setTimeout(hideMandagOnsdagM, 500);
    pil22tv.addEventListener("click", mandagMaterialer);
    pil22th.addEventListener("click", onsdagMaterialer);
}

function tirsdagMaterialer2() {
    d21.classList = "hide";
    d23.classList = "fadeout_right";
    d22.classList = "fadein_left";
    setTimeout(hideMandagOnsdagM, 500);
    pil22tv.addEventListener("click", mandagMaterialer);
    pil22th.addEventListener("click", onsdagMaterialer);
}

function onsdagMaterialer() {
    d21.classList = "hide";
    d23.classList = "fadein_right";
    d22.classList = "fadeout_left";
    setTimeout(hideMandagTirsdagM, 500);
    pil23tv.addEventListener("click", tirsdagMaterialer2);
}

function hideMandagOnsdagM() {
    d21.classList = "hide";
    d23.classList = "hide";
}

function hideMandagTirsdagM() {
    d21.classList = "hide";
    d22.classList = "hide";
}

function hideTirsdagOnsdagM() {
    d22.classList = "hide";
    d23.classList = "hide";
}
