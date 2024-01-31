import { useAspirante } from "../../hooks/useAspirante";
import { useCarreraTecnica } from "../../hooks/useCarreraTecnica"

export const CarreraTecnicaRow = ({ carreraId, carreraTecnica, index }) => {
    //const { handlerRemoveCarreraTecnica,handlerCarreraTecnicaSelectedForm } = useContext(CarreraTecnicaContext);
    const { handlerRemoveCarreraTecnica, handlerCarreraTecnicaSelectedForm } = useCarreraTecnica();
    const { handlerOpenForm } = useAspirante();
    return (
        <tr>
            <td>{index}</td>
            <td>{carreraTecnica}</td>
            <td><button onClick={() => handlerCarreraTecnicaSelectedForm({ carreraId, carreraTecnica })} className="btn btn-primary btn-sm">Update</button></td>
            <td><button className="btn btn-danger btn-sm" onClick={() => handlerRemoveCarreraTecnica(carreraId)}>Eliminar</button></td>
            <td><button onClick={() => handlerOpenForm()} className="btn btn-success btn-sm">asignar</button></td>
        </tr>
    )
}