{
    const welcome = () => {
        console.log("Witam serdecznie wszystkich, którzy odwiedzają moją pierwszą stronę internetową!");
    }

    const onChangebackgroundClic = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };


    const init = () => {
        const button = document.querySelector(".button");

        button.addEventListener("click", onChangebackgroundClic);

        welcome();

    }

    init();


}





