import { JornadasRow } from "./JornadasRow";
import { useJornadas } from "../../hooks/useJornadas";
import { CrearSolicitudAspiranteModalForm } from "../aspirantes/CrearSolicitudAspiranteModalForm";
import { useSelector } from "react-redux";
export const JornadasList = () => {
    const { visibleFormSolicitud } = useSelector(state => state.aspirantes);
    const { jornadas } = useJornadas();
    return (
        <>

            {!visibleFormSolicitud || <CrearSolicitudAspiranteModalForm />}
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Jornadas</th>
                        <th>Descripcion</th>
                        <th>Update</th>
                        <th>Delete</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        jornadas.map(({ jornadaId, descripcion, jornada }, index) => (
                            <JornadasRow index={++index} key={jornadaId} jornadaId={jornadaId} jornada={jornada} descripcion={descripcion} />
                        ))


                    }
                </tbody>
            </table></>
    )
}
