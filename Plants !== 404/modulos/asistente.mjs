export function iniciarAsistente(datos) {
    let voice = false;
    let rec;

    const asistente = document.querySelector(".navbar__logo");
    asistente.addEventListener("click", () => {
        voice = true;
        intro();

        //verificar la disponibilidad de la api
        if (!("webkitSpeechRecognition" in window)) {
            alert("Disculpas, no puedes usar la API");
        } else {
            //instancia de speechRecognition
            rec = new webkitSpeechRecognition();
            rec.lang = "es";
            //detenerse al oir una vez, no escucha constantemente
            rec.continuous = false;
            //lanza un evento result cuando obtiene resultados de la escucha
            rec.interimResults = true;
            //manejar los resutlados que se escuchan
            rec.addEventListener("result", iniciar);
            //iniciar reconocimiento de voz
            rec.addEventListener("end", () => {
                rec.start();
            });
            rec.start();
        }
    });

    function iniciar(event) {
        const texto = event.results[0][0].transcript.toLowerCase();
        console.log(texto)
        charla(texto);
    }

    function charla(texto) {
        console.log(texto);

        switch (texto) {
            case "instructiones":
                instrucciones();
                break;
            case "abrir youtube":
                decir("Opening YouTube");
                window.open("https://www.youtube.com/?gl=AR&hl=es-419");
                break;
            case "ir a productos":
                decir("Opening products");
                datos.productosOption.click();
                break;
            case "ir a sobre nosotros":
                decir("Opening about");
                datos.aboutOption.click();
                break;
            case "ir a home":
                decir("Opening home");
                datos.homeOption.click();
                break;
            case "ir a login":
                decir("Opening login form");
                datos.loginButton.click();
                break;
            case "finalizar ayuda":
                decir("Got it, ending the voice recognition");
                voice = false;
                rec.stop();
                break;
            default:
                decir("I didnt heard you");
        }
    }

    async function decir(texto) {
        if (voice) {
            const mensaje = new SpeechSynthesisUtterance(texto);

            await new Promise(resolve => {
                speechSynthesis.onvoiceschanged = resolve;
            });

            const voces = speechSynthesis.getVoices();

            const vozFemenina = voces.find(voice => voice.name === "Microsoft Zira - English (United States)");

            mensaje.voice = vozFemenina || voces[0];

            speechSynthesis.speak(mensaje);
        } else {
            alert("No tengo permiso para hablar");
        }
    }



    function intro() {
        decir("Hi, im your personal asisten, i will help you to navegate in the web page");
    }

    function instrucciones() {
        decir("you can read the documentation that we create in the root of the proyect, the name of the file is Leer.txt");
    }
}