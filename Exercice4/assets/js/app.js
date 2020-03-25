let myHeaders = new Headers();

let fetchOptions = {
    method: 'GET',          // Methode utilisée par la requête
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

// Fonction qui va cherche un Chat sur thecatapi.com
const fetchCat = () => {
    // Fetch : Fonction native de l'API web JS du navigateur
    fetch("https://api.thecatapi.com/v1/images/search", fetchOptions)     // je demande à fetch d'aller chercher une photo
        .then(resp => resp.text())                                        // QUAND il retourne une reponse je convertit mon objet response en text
        .then(body => {                                                   // QUAND il a fini de préparer le texte
            body = JSON.parse(body);
            console.log(body);
            document.getElementById("cat").style.backgroundImage = `url(${body[0].url})`
        });
};

document.addEventListener("mousemove", () => {
    document.querySelector("div#cat").style.top = window.event.clientY + "px";
    document.querySelector("div#cat").style.left = window.event.clientX + "px";
});

document.addEventListener("click", fetchCat);