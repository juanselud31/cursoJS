function AdivinaElNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let adivinado = false;
    while (adivinado === false) {
        const intento = parseInt(prompt("Intenta adivinar el número entre 1 y 100"));
        intentos++;
        if (intento === numeroAleatorio) {
            alert("¡Felicidades! Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos.");
            adivinado = true 
        } else if (intento < numeroAleatorio) {
            alert("El número es mayor. Intentá nuevamente.");
        } else {
            alert("El número es menor. Intentá nuevamente.")
        }
    }
}
AdivinaElNumero()
