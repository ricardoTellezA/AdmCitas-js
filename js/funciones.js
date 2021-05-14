import Cita from './clases/Citas.js'
import UI from './clases/UI.js'
import {inputMascota,inputPropetario,inputTelefono,inputFecha,inputHora,inputSintomas,formulario} from './selectores.js'
const citaInformacion = new Cita();

const ui = new UI();
let modoEdicion = false;

//OBJ
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//FUNCIONES
export function datosCita(e) {
    citaObj[e.target.name] = e.target.value;

}

export function nuevaCita(e) {
    e.preventDefault();


    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if (modoEdicion) {
        ui.imprimirAlerta('Se edito correcamente la cita', 'correcto');

        citaInformacion.editarCita({...citaObj});

        //REGRESA EL TEXTO DEL BOTON
        formulario.querySelector('button[type="submit"]').textContent = 'Crear cita';

        modoEdicion = false;



        //PASAR EL OBJETO
    } else {
        citaObj.id = Date.now();

        citaInformacion.administrarCitas({ ...citaObj });

        ui.imprimirAlerta('Se agrego correctamente', 'correcto');
    }




    limpiarArray();

    formulario.reset();

    ui.imprimiCita(citaInformacion);
}


export function limpiarArray() {
    citaObj.mascota = '';
    citaObj.propietario = ''
    citaObj.telefono = ''
    citaObj.fecha = ''
    citaObj.hora = ''
    citaObj.sintomas = ''
}



export function eliminarCita(id) {
    //ELIMAR
    citaInformacion.eliminaCita(id);

    //MENSAJE

    ui.imprimirAlerta('La cita se elimino correcamente', 'correcto');


    //REFRECH

    ui.imprimiCita(citaInformacion);
}


//MODO EDICION

export function cargarEdicion(cita) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    //LLENAR INPUTS

    inputMascota.value = mascota;
    inputPropetario.value = propietario;
    inputTelefono.value = telefono;
    inputFecha.value = fecha;
    inputHora.value = hora;
    inputSintomas.value = sintomas;



    //objeto

    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    //CAMBIAR EL TEXTO DEL BOTON

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambios';

    modoEdicion = true;
} 