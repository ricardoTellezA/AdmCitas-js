import { cargarEdicion, eliminarCita } from "../funciones.js";
import { citasform } from "../selectores.js";

class UI {

    imprimirAlerta(mensaje, tipo) {
        const div = document.createElement('div');
        div.classList.add('text-center', 'aler', 'd-block', 'col-12', 'p-4', 'mb-3', 'men');

        if (tipo === 'error') {
            div.classList.add('alert-danger');
        } else {
            div.classList.add('alert-success');
        }

        div.textContent = mensaje;

        document.querySelector('#contenido').insertBefore(div, document.querySelector('.agregar-cita'));


        setTimeout(() => {
            div.remove();
        }, 3000);
    }


    imprimiCita({ citas }) {
        this.limpiarHTML();
        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

            const mascotaDiv = document.createElement('div');
            mascotaDiv.classList.add('mascota', 'p-3');
            mascotaDiv.dataset.id = id;

            const h2 = document.createElement('h2');
            h2.classList.add('card-little', 'font-weight-bold');
            h2.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `

            <span class="font-weight-bold">Propietario:</span> ${propietario}
            
            `;
            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `

            <span class="font-weight-bold">Telefono:</span> ${telefono}
            
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `

            <span class="font-weight-bold">fecha:</span> ${fecha}
            
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `

            <span class="font-weight-bold">hora:</span> ${hora}
            
            `;
            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `

            <span class="font-weight-bold">sintomas:</span> ${sintomas}
            
            `;

            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'mr-2');
            btnBorrar.innerHTML = 'Eliminar';

            btnBorrar.onclick = () => eliminarCita(id);

            const bntEditar = document.createElement('button');
            bntEditar.innerHTML = 'Editar';
            bntEditar.classList.add('btn', 'btn-primary', 'mr-2');
            bntEditar.onclick = () => cargarEdicion(cita);

            mascotaDiv.appendChild(h2);
            mascotaDiv.appendChild(propietarioParrafo);
            mascotaDiv.appendChild(telefonoParrafo);

            mascotaDiv.appendChild(horaParrafo);

            mascotaDiv.appendChild(fechaParrafo);
            mascotaDiv.appendChild(sintomasParrafo);

            citasform.appendChild(mascotaDiv);
            mascotaDiv.appendChild(btnBorrar);
            mascotaDiv.appendChild(bntEditar);


        })
    }

    limpiarHTML() {
        while (citasform.firstChild) {
            citasform.removeChild(citasform.firstChild);

        }
    }


}

export default UI;