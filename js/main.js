function abrirMenu() {
    var menu = document.querySelector(".cont-menu");
    menu.classList.add('active');
    menu.classList.remove('negative');

}

function cerrar() {
    var menu = document.querySelector(".cont-menu");
    menu.classList.add('negative');
    menu.classList.remove('active');
}