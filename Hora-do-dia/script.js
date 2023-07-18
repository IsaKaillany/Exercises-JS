function load() {
    let message = document.getElementById('message');
    let photo = document.getElementById('photo');
    let date = new Date();
    let hour = date.getHours();

    message.innerHTML = `Agora são ${hour} horas.`;

    if (0 <= hour && hour < 12) {
        photo.src = "./assets/manhã.jpg";
        document.body.style.background = '#D2B69B'
    } else if (12 <= hour && hour <= 18) {
        photo.src = "./assets/tarde.jpg";
        document.body.style.background = '#B9846F'
    } else {
        photo.src = "./assets/noite.jpg";
        document.body.style.background = '#012145'
    }
}

