import { useEffect, useState } from "react"
import Swal from 'sweetalert2';
import { useJornadas } from "../../hooks/useJornadas";

export const JornadasForm = ({ jornadaSelected }) => {
    const { initialJornadaForm, handlerAddJornada, handlerUpdateJornada, hamdlerCloseForm } = useJornadas();
    const [jornadasForm, setJornadasForm] = useState(initialJornadaForm);
    //Revisar porque no se utiliza carreraIcon
    const { jornadaId, jornada, descripcion } = jornadasForm;
    useEffect(() => { setJornadasForm(jornadaSelected) }, [jornadaSelected]);
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setJornadasForm({
            ...jornadasForm,
            [name]: value
        });
    }
    const onSubmit = (event) => {
        console.log(jornadasForm);
        console.log(jornadaSelected);
        console.log(jornadaId);
        event.preventDefault();
        if (!jornada) {
            Swal.fire('Error de validacion',
                'Es requerida la jornada',
                'error');
            return;
        }
        if (jornadaId) {
            handlerUpdateJornada({ jornadaId, jornada, descripcion })
        } else {
            handlerAddJornada(jornadasForm);
        }
        setJornadasForm(initialJornadaForm);
        hamdlerCloseForm();
    }
    const onCloseForm = () => {
        hamdlerCloseForm();
        setJornadasForm(initialJornadaForm);
    }
    return (
        <form onSubmit={onSubmit}>
            <input className="form-control my-3 w-75" placeholder="jornada" name="jornada" value={jornada} onChange={onInputChange} />
            <input className="form-control my-3 w-75" placeholder="descripcion" name="descripcion" value={descripcion} onChange={onInputChange} />

            <button className="btn btn-primary" type="submit">{jornadaId.length > 0 ? 'Guardar' : 'Crear'}</button>
            <button className="btn btn-danger mx-2" onClick={() => { onCloseForm() }} >Cancelar</button>
        </form>
    )
}