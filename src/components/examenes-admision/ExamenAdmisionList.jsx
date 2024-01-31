import { ExamenAdmisionRow } from "./ExamenAdmisionRow"
import { useExamenAdmision } from "../../hooks/useExamenAdmision";
import { CrearSolicitudAspiranteModalFormExamenAdmision } from "../aspirantes/CrearSolicitudAspiranteModalFormExamenAdmision";
import { useSelector } from "react-redux";


export const ExamenAdmisionList = () => {
    const { visibleFormSolicitud } = useSelector(state => state.aspirantes);
    const { examenesAdmision } = useExamenAdmision();
    return (
        <>
            {!visibleFormSolicitud || <CrearSolicitudAspiranteModalFormExamenAdmision />}
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Examen de Admision</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        examenesAdmision.map(({ examenId, fechaExamen }, index) => (
                            <ExamenAdmisionRow index={++index} key={examenId} examenId={examenId} fechaExamen={fechaExamen} />
                        ))


                    }
                </tbody>
            </table>
        </>
    )
}