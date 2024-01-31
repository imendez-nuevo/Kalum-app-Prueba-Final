import { JornadasForm } from "./JornadasForm";
import { useJornadas } from "../../hooks/useJornadas";
export const JornadasModalForm = () => {
    const { jornadaSelected, hamdlerCloseForm } = useJornadas();
    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {jornadaSelected.jornadaId.length > 0 ? 'Editar' : 'Crear'}
                            </h5>
                        </div>
                        <div className="modal-body">

                            <JornadasForm jornadaSelected={jornadaSelected} hamdlerCloseForm={hamdlerCloseForm} />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}