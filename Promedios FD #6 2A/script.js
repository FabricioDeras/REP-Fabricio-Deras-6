function promediar() {
    const nota1 = +document.querySelector("#nota1").value;
    const nota2 = +document.querySelector("#nota2").value;
    const nota3 = +document.querySelector("#nota3").value;
    const mostrar = document.querySelector("#salida");
    const promedio = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.3);
    mostrar.textContent = promedio;

    if (promedio >= 9 && promedio <=10 ) {
        salida.textContent = promedio.toFixed(2) + '-Excelente desempeño'
    } 
      if (promedio >= 7 && promedio <=8) {
        salida.textContent = promedio.toFixed(2) + '-Muy buen desempeño'

    } 
    if(promedio >=5 && promedio <6){
    salida.textContent = promedio.toFixed(2) + '-A seguir trabajando'
    }

}
function ce(){
    location.reload()
}