import Swal from "sweetalert2";
import { findAll, save, remove, update } from "../services/ExamenAdmisionService";
import { useDispatch, useSelector } from "react-redux";
import {
    loadingExamenesAdmision,
    removeExamenAdmision,
    updateExamenAdmision,
    addExamenAdmision,
    onExamenAdmisionSelectedForm,
    onOpenForm,
    onCloseForm
} from "../store/slices/ExamenAdmisionSlice/ExamenAdmisionSlice";
const initialExamenAdmisionForm = {
    examenId: '',
    fechaExamen: ''
}
const intialExamenesAdmision = []
export const useExamenAdmision = () => {

    const { examenesAdmision, examenAdmisionSelected, visibleForm } = useSelector(state => state.examenesAdmision);
    const dispatch = useDispatch();

    const getExamenesAdmision = async () => {
        const response = await findAll();
        console.log(response);
        dispatch(loadingExamenesAdmision(response.data))
    }
    const handlerAddExamenAdmision = async (fechaExamen) => {
        const response = await save(fechaExamen);
        console.log(response);
        dispatch(addExamenAdmision(response.data.fechaExamen));
        Swal.fire('ExamenesAdmision', response.data.mensaje, 'success');
    }

    const handlerRemoveExamenAdmision = async (id) => {
        const result = await Swal.fire({
            title: 'Esta seguro de eliminar el registro?',
            text: 'Cuidado que el examen de admision sera eliminada permanentemente',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085D6',
            cancelButtonColor: '#D33',
            confirmButtonText: 'Si,eliminar este registro'
        });
        if (result.isConfirmed) {
            const response = await remove(id);
            dispatch(removeExamenAdmision(id))
            Swal.fire('ExamenesAdmision', response.data.mensaje, 'success');
        }


    }
    const handlerUpdateExamenAdmision = async (fechaExamen) => {
        const response = await update(fechaExamen);
        dispatch(updateExamenAdmision(fechaExamen));
        Swal.fire('ExamenesAdmision', response.data.mensaje, 'success');
    }
    const handlerExamenAdmisionSelectedForm = (fechaExamen) => {
        dispatch(onExamenAdmisionSelectedForm({ ...fechaExamen }));
    }
    const hamdlerCloseForm = () => {
        dispatch(onCloseForm());
    }
    const handlerOpenForm = () => {
        dispatch(onOpenForm());
    }
    return {
        initialExamenAdmisionForm,
        handlerAddExamenAdmision,
        handlerRemoveExamenAdmision,
        handlerExamenAdmisionSelectedForm,
        handlerUpdateExamenAdmision,
        hamdlerCloseForm,
        handlerOpenForm,
        visibleForm,
        examenAdmisionSelected,
        examenesAdmision,
        getExamenesAdmision
    }
}

