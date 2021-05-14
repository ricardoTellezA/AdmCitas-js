import { datosCita, nuevaCita } from '../funciones.js';
import {inputMascota,inputPropetario,inputTelefono,inputFecha,inputHora,inputSintomas,formulario} from '../selectores.js'


 class App {
    constructor() {
        this.initApp();
    }
    initApp() {
        inputMascota.addEventListener('input', datosCita);
        inputPropetario.addEventListener('input', datosCita);
        inputTelefono.addEventListener('input', datosCita);
        inputFecha.addEventListener('input', datosCita);
        inputSintomas.addEventListener('input', datosCita);
        inputHora.addEventListener('input', datosCita);

        formulario.addEventListener('submit', nuevaCita);
    }
}

export default App;