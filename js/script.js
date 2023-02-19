{
    const welcome = () => {
        console.log("Witam serdecznie wszystkich, którzy odwiedzają moją pierwszą stronę internetową!");
    }

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("body--ark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    };


    const init = () => {
        const button = document.querySelector(".button");

        button.addEventListener("click", onChangeBackgroundClick);

        welcome();

    }

    init();


}





