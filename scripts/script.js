document.addEventListener("DOMContentLoaded", () =>{
    const calculator = document.getElementById("calculate");
    const final = document.getElementById("result");

    //está esperando los valores del usuario
    calculator.addEventListener("click", () =>{
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);
    
        if (!isNaN(length) && !isNaN(width)){
            const area = length * width;
            final.innerHTML = `El área es ${area}`;
        }
        else {
        final.innerHTML = `Datos mal introducidos`;
    }
    });
});



