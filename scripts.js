const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {

    document
        .getElementById("playground")
        .scrollIntoView({
            behavior: "smooth"
        });

});