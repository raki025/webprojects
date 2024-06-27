function toggleDivs() {
    var dropdown = document.getElementById("dropdown");
    var divs = ["div1", "div2", "div3", "div4"];

    divs.forEach(function(divId) {
        var div = document.getElementById(divId);
        div.classList.add("hidden");
    });

    if (dropdown.value !== "none") {
        var selectedDiv = document.getElementById(dropdown.value);
        selectedDiv.classList.remove("hidden");
    }
}
