const button = document.querySelector("button");
console.log(button);

const icon = document.getElementsByClassName("icon")[0];

button.addEventListener("click", ()=> {
    const main = document.getElementById('main-login');
    const svg = document.getElementsByClassName('svg')[0];

    if (icon.src === "https://cdn0.iconfinder.com/data/icons/phosphor-fill-vol-4/256/sun-fill-256.png") {
        icon.src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-moon-256.png"
        icon.style= "filter: none;"
        main.classList.add('light')
        svg.src = './svg/Astronaut-bro-light.svg';
    } else {
        icon.src = "https://cdn0.iconfinder.com/data/icons/phosphor-fill-vol-4/256/sun-fill-256.png"
        icon.style= "filter: invert(1);"
        main.classList.remove('light');
        svg.src = './svg/Astronaut-bro.svg'
    }
});