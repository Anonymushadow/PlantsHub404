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
            rec.lang = "es-AR";
            //detenerse al oir una vez, no escucha constantemente
            rec.continuous = false;
            //lanza un evento result cuando obtiene resultados de la escucha
            rec.interim = true;
            //manejar los resutlados que se escuchan
            rec.addEventListener("result", iniciar);
            //iniciar reconocimiento de voz
            rec.start();
        }
    });

    function iniciar(event) {
        const texto = event.results[0][0].transcript.toLowerCase();
        charla(texto);
    }

    function charla(texto) {
        console.log(texto);

        switch (texto) {
            case "instructions":
                instrucciones();
                break;
            case "abrir youtube":
                decir("Abriendo YouTube");
                window.open("https://www.youtube.com/?gl=AR&hl=es-419");
                break;
            case "ir a productos":
                decir("Abriendo productos");
                datos.productosOption.click();
                break;
            case "finalizar ayuda":
                decir("Entendido. Cerrando el reconocimiento de voz");
                voice = false;
                rec.stop();
                break;
            default:
                decir("No te escuché");
        }
    }

    async function decir(texto) {
        if (voice) {
            const mensaje = new SpeechSynthesisUtterance(texto);

            await new Promise(resolve => {
                speechSynthesis.onvoiceschanged = resolve;
            });

            const voces = speechSynthesis.getVoices();
            console.log("Voces disponibles:", voces);

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