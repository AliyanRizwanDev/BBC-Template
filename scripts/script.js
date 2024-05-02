const drawer = () => {
    var getDrawer = document.querySelector(".drawer");
    var magnifyingIcon = document.querySelector("#magnifyingIcon");
    var searchIcon = document.querySelector("#searchIcon");
    var crossIcon = document.querySelector("#crossIcon");

    if (getDrawer.style.transform === "translate(0%)") {
        getDrawer.style.transform = "translate(-100%)";
        magnifyingIcon.style.display = "block";
        searchIcon.style.display = "block";
        crossIcon.style.display = "none";

       
    } else {
        getDrawer.style.transform = "translate(0%)";
        magnifyingIcon.style.display = "none";
        searchIcon.style.display = "none";
        crossIcon.style.display = "flex";
    }
}


const Language = () => {
    var chervonUp = document.querySelector("#chevronUp");
    var chevronDown = document.querySelector("#chevronDown");
    var LanguagesBox = document.querySelector(".LanguagesBox");

    if (LanguagesBox.style.display === "none" || LanguagesBox.style.display === "") {
        LanguagesBox.style.display = "block";
        chervonUp.style.display = "none"; 
        chevronDown.style.display = "inline"; 
    } else {
        LanguagesBox.style.display = "none";
        chervonUp.style.display = "inline";
        chevronDown.style.display = "none"; 
    }
}
