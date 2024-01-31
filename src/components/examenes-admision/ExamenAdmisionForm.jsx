import { useEffect, useState } from "react"
import Swal from 'sweetalert2';
import { useExamenAdmision } from "../../hooks/useExamenAdmision";


export const ExamenAdmisionForm = ({ examenAdmisionSelected }) => {
    const { initialExamenAdmisionForm, handlerAddExamenAdmision, handlerUpdateExamenAdmision, hamdlerCloseForm } = useExamenAdmision();
    const [examenAdmisionForm, setExamenAdmisionForm] = useState(initialExamenAdmisionForm);
    //Revisar porque no se utiliza carreraIcon
    const { examenId, fechaExamen } = examenAdmisionForm;
    useEffect(() => { setExamenAdmisionForm(examenAdmisionSelected) }, [examenAdmisionSelected]);
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setExamenAdmisionForm({
            ...examenAdmisionForm,
            [name]: value
        });
    }
    const onSubmit = (event) => {
        console.log(examenAdmisionForm);
        console.log(examenAdmisionSelected);
        console.log(examenId);
        event.preventDefault();
        if (!fechaExamen) {
            Swal.fire('Error de validacion',
                'Debe completar los campos de formulario',
                'error');
            return;
        }
        if (examenId) {
            handlerUpdateExamenAdmision({ examenId, fechaExamen })
        } else {
            handlerAddExamenAdmision(examenAdmisionForm);
        }
        setExamenAdmisionForm(initialExamenAdmisionForm);
        hamdlerCloseForm();
    }
    const onCloseForm = () => {
        hamdlerCloseForm();
        setExamenAdmisionForm(initialExamenAdmisionForm);
    }
    return (
        <form onSubmit={onSubmit}>
            <input className="form-control my-3 w-75" placeholder="Examen Admision" name="fechaExamen" value={fechaExamen} onChange={onInputChange} />

            <button className="btn btn-primary" type="submit">{fechaExamen.length > 0 ? 'Guardar' : 'Crear'}</button>
            <button className="btn btn-danger mx-2" onClick={() => { onCloseForm() }} >Cancelar</button>
        </form>
    )
}