


class Cita {
    constructor() {
        this.citas = []
    }

    administrarCitas(citaObj) {
        this.citas = [...this.citas, citaObj];

    }

    eliminaCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editarCita(citaActualizada){

        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }

}

export default Cita;