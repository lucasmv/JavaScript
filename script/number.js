window.onload = function() {
    nota();
};

function nota() {

    var nota  = 20;
    console.log(nota);

    nota = 10.2;
    console.log(nota);

    console.log(typeof nota);

    console.log(nota.toFixed(2));
    console.log(nota.toExponential(2));
    console.log(0.1 + 0.2);
    console.log(3/0);
    console.log("teste"*10);
}