import Swal from "sweetalert2";
import { findAll, save, remove, update } from "../services/JornadasService";
import { useDispatch, useSelector } from "react-redux";
import {
    updateJornada, addJornada,
    removeJornada,
    loadingJornadas,
    onJornadaSelectedForm,
    onOpenForm,
    onCloseForm
} from "../store/slices/jornadasSlice/jornadasSlice";

const initialJornadaForm = {
    jornadaId: '',
    jornada: '',
    descripcion: '',
}
const intialJornadas = []

export const useJornadas = () => {

    const { jornadas, jornadaSelected, visibleForm } = useSelector(state => state.jornadas);
    const dispatch = useDispatch();

    const getJornadas = async () => {
        const response = await findAll();
        console.log(response);
        dispatch(loadingJornadas(response.data))

    }
    const handlerAddJornada = async (jornada) => {
        const response = await save(jornada);
        dispatch(addJornada(response.data.jornada));
        Swal.fire('Jornadas', response.data.mensaje, 'success');
    }

    const handlerRemoveJornada = async (id) => {
        //forma de promesas
        const result = await Swal.fire({
            title: 'Esta seguro de eliminar el registro?',
            text: 'Cuidado que la jornada sera eliminada permanentemente',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085D6',
            cancelButtonColor: '#D33',
            confirmButtonText: 'Si,eliminar este registro'
        });
        if (result.isConfirmed) {
            const response = await remove(id);
            dispatch(removeJornada(id))
            Swal.fire('Jornadas', response.data.mensaje, 'success');
        }


    }
    const handlerUpdateJornada = async (jornada) => {
        const response = await update(jornada);
        dispatch(updateJornada(jornada));
        Swal.fire('Jornadas', response.data.mensaje, 'success');
    }
    const handlerJornadaSelectedForm = (jornada) => {
        dispatch(onJornadaSelectedForm({ ...jornada }));
    }
    const hamdlerCloseForm = () => {
        dispatch(onCloseForm());
    }
    const handlerOpenForm = () => {
        dispatch(onOpenForm());
    }
    return {
        initialJornadaForm,
        handlerAddJornada,
        handlerRemoveJornada,
        handlerJornadaSelectedForm,
        handlerUpdateJornada,
        hamdlerCloseForm,
        handlerOpenForm,
        visibleForm,
        jornadaSelected,
        jornadas,
        getJornadas
    }
}

