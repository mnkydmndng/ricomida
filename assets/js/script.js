var tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(document).ready(function () {
    $(".clr-change").dblclick(function () {
        var colores = ["red"];
        var nuevoColor = colores[Math.floor(Math.random() * colores.length)];
        $(this).css("color", nuevoColor);
    });
});


$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});