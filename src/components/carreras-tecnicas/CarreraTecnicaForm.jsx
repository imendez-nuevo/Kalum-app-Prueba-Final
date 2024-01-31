import { useEffect, useState } from "react"
import Swal from 'sweetalert2';
import { useCarreraTecnica } from "../../hooks/useCarreraTecnica";

export const CarreraTecnicaForm = ({ carreraTecnicaSelected }) => {
    const { initialCarreraTecnicaForm, handlerAddCarreraTecnica, handlerUpdateCarreraTecnica, hamdlerCloseForm } = useCarreraTecnica();
    const [carreraTecnicaForm, setCarreraTecnicaForm] = useState(initialCarreraTecnicaForm);
    //Revisar porque no se utiliza carreraIcon
    const { carreraId, carreraTecnica } = carreraTecnicaForm;
    useEffect(() => { setCarreraTecnicaForm(carreraTecnicaSelected) }, [carreraTecnicaSelected]);
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setCarreraTecnicaForm({
            ...carreraTecnicaForm,
            [name]: value
        });
    }
    const onSubmit = (event) => {
        console.log(carreraTecnicaForm);
        console.log(carreraTecnicaSelected);
        console.log(carreraId);
        event.preventDefault();
        if (!carreraTecnica) {
            Swal.fire('Error de validacion',
                'Debe completar los campos de formulario',
                'error');
            return;
        }
        if (carreraId) {
            handlerUpdateCarreraTecnica({ carreraId, carreraTecnica })
        } else {
            handlerAddCarreraTecnica(carreraTecnicaForm);
        }
        setCarreraTecnicaForm(initialCarreraTecnicaForm);
        hamdlerCloseForm();
    }
    const onCloseForm = () => {
        hamdlerCloseForm();
        setCarreraTecnicaForm(initialCarreraTecnicaForm);
    }
    return (
        <form onSubmit={onSubmit}>
            <input className="form-control my-3 w-75" placeholder="Carrera Técnica" name="carreraTecnica" value={carreraTecnica} onChange={onInputChange} />

            <button className="btn btn-primary" type="submit">{carreraTecnica.length > 0 ? 'Guardar' : 'Crear'}</button>
            <button className="btn btn-danger mx-2" onClick={() => { onCloseForm() }} >Cancelar</button>
        </form>
    )
}