import Swal from "sweetalert2";
import { findAll, save, remove, update } from "../services/carrreraTecnicaService";
import { useDispatch, useSelector } from "react-redux";
import { loadingCarrerasTecnicas, removeCarreraTecnica, updateCarreraTecnica, addCarreraTecnica, onCarreraTecnicaSelectedForm, onOpenForm, onCloseForm } from "../store/slices/carreras-tecnicas/carrerasTecnicasSlice";

const initialCarreraTecnicaForm = {
    carreraId: '',
    carreraTecnica: ''
}
const intialCarrerasTecnicas = []

export const useCarreraTecnica = () => {

    const { carrerasTecnicas, carreraTecnicaSelected, visibleForm } = useSelector(state => state.carrerasTecnicas);
    const dispatch = useDispatch();

    const getCarrerasTecnicas = async () => {
        const response = await findAll();
        console.log(response);
        dispatch(loadingCarrerasTecnicas(response.data))

    }
    const handlerAddCarreraTecnica = async (carreraTecnica) => {
        const response = await save(carreraTecnica);
        console.log(response);
        dispatch(addCarreraTecnica(response.data.carreraTecnica));
        Swal.fire('Carreras Tecnicas', response.data.mensaje, 'success');
    }

    const handlerRemoveCarreraTecnica = async (id) => {
        //forma de promesas
        const result = await Swal.fire({
            title: 'Esta seguro de eliminar el registro?',
            text: 'Cuidado que la carrera técnica sera eliminada permanentemente',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085D6',
            cancelButtonColor: '#D33',
            confirmButtonText: 'Si,eliminar este registro'
        });
        if (result.isConfirmed) {
            const response = await remove(id);
            dispatch(removeCarreraTecnica(id))
            Swal.fire('Carreras tecnicas', response.data.mensaje, 'success');
        }


    }
    const handlerUpdateCarreraTecnica = async (carreraTecnica) => {
        const response = await update(carreraTecnica);
        dispatch(updateCarreraTecnica(carreraTecnica));
        Swal.fire('Carreras tecnicas', response.data.mensaje, 'success');
    }
    const handlerCarreraTecnicaSelectedForm = (carreraTecnica) => {
        dispatch(onCarreraTecnicaSelectedForm({ ...carreraTecnica }));
    }
    const hamdlerCloseForm = () => {
        dispatch(onCloseForm());
    }
    const handlerOpenForm = () => {
        dispatch(onOpenForm());
    }
    return {
        initialCarreraTecnicaForm,
        handlerAddCarreraTecnica,
        handlerRemoveCarreraTecnica,
        handlerCarreraTecnicaSelectedForm,
        handlerUpdateCarreraTecnica,
        hamdlerCloseForm,
        handlerOpenForm,
        visibleForm,
        carreraTecnicaSelected,
        carrerasTecnicas,
        getCarrerasTecnicas
    }
} 
