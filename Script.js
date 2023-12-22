const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=single";
let getJoke = () =>{
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data =>data.json())
    .then(item =>{
        //without prompt shows the content from API//
        //notice the `` and not ''//
        jokeContainer.textContent=`${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}
//making the button active
btn.addEventListener("click",getJoke);
getJoke();