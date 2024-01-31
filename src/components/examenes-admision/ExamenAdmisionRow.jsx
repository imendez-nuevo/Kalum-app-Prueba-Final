import { useAspirante } from "../../hooks/useAspirante";
import { useExamenAdmision } from "../../hooks/useExamenAdmision"
export const ExamenAdmisionRow = ({ examenId, fechaExamen, index }) => {
    const { handlerRemoveExamenAdmision, handlerExamenAdmisionSelectedForm } = useExamenAdmision();
    const { handlerOpenForm } = useAspirante();
    return (
        <tr>
            <td>{index}</td>
            <td>{fechaExamen}</td>
            <td><button onClick={() => handlerExamenAdmisionSelectedForm({ examenId, fechaExamen })} className="btn btn-primary btn-sm">Update</button></td>
            <td><button className="btn btn-danger btn-sm" onClick={() => handlerRemoveExamenAdmision(examenId)}>Eliminar</button></td>
            <td><button onClick={() => handlerOpenForm()} className="btn btn-success btn-sm">asignar</button></td>
        </tr>
    )
}