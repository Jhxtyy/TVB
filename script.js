const container = document.querySelector('.container');

container.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = 'rgb(153, 65, 72)'; // Cambia il colore del body al passaggio del mouse sul container
});

container.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = 'rgb(65, 68, 153)'; // Reimposta il colore del body quando il mouse esce dal container
});
