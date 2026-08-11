// ======================================
// SWEET COOKIES - JAVASCRIPT
// ======================================

// Seleccionar un sabor
function seleccionarSabor(sabor) {

    const campoSabor = document.getElementById("sabor");

    if (campoSabor) {
        campoSabor.value = sabor;
    }

    const contacto = document.getElementById("contacto");

    if (contacto) {
        contacto.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ======================================
// VALIDACIÓN DEL FORMULARIO
// ======================================

const formulario = document.getElementById("contactForm");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const sabor = document.getElementById("sabor").value;
        const mensaje = document.getElementById("mensaje").value.trim();
        const formMessage = document.getElementById("formMessage");


        // Validar nombre
        if (nombre.length < 3) {

            formMessage.textContent =
                "⚠️ Escribe un nombre válido de al menos 3 caracteres.";

            return;
        }


        // Validar correo
        const emailValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {

            formMessage.textContent =
                "⚠️ Escribe un correo electrónico válido.";

            return;
        }


        // Validar sabor
        if (sabor === "") {

            formMessage.textContent =
                "⚠️ Selecciona tu sabor favorito.";

            return;
        }


        // Validar mensaje
        if (mensaje.length < 10) {

            formMessage.textContent =
                "⚠️ Escribe un mensaje de al menos 10 caracteres.";

            return;
        }


        // Formulario correcto
        formMessage.textContent =
            "✅ ¡Gracias, " + nombre +
            "! Recibimos tu solicitud de " +
            sabor +
            ". Te contactaremos pronto.";


        formMessage.style.color = "#2e7d32";


        // Limpiar formulario
        formulario.reset();

    });

}