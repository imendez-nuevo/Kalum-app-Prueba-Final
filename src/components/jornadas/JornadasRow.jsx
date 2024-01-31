import { useAspirante } from "../../hooks/useAspirante";
import { useJornadas } from "../../hooks/useJornadas";

export const JornadasRow = ({ jornadaId, jornada, descripcion, index }) => {
    const { handlerRemoveJornada, handlerJornadaSelectedForm } = useJornadas();
    const { handlerOpenForm } = useAspirante();
    return (
        <tr>
            <td>{index}</td>
            <td>{jornada}</td>
            <td>{descripcion}</td>
            <td><button onClick={() => handlerJornadaSelectedForm({ jornadaId, jornada, descripcion })} className="btn btn-primary btn-sm">Update</button></td>
            <td><button className="btn btn-danger btn-sm" onClick={() => handlerRemoveJornada(jornadaId)}>Eliminar</button></td>
            <td><button onClick={() => handlerOpenForm()} className="btn btn-success btn-sm">asignar</button></td>
        </tr>
    )
}