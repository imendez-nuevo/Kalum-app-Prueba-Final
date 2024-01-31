import { ExamenAdmisionForm } from "./ExamenAdmisionForm"
import { useExamenAdmision } from "../../hooks/useExamenAdmision"


export const ExamenAdmisionModalForm = () => {

    const { examenAdmisionSelected, hamdlerCloseForm } = useExamenAdmision();
    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {examenAdmisionSelected.examenId.length > 0 ? 'Editar' : 'Crear'}
                            </h5>
                        </div>
                        <div className="modal-body">
                            <ExamenAdmisionForm examenAdmisionSelected={examenAdmisionSelected} hamdlerCloseForm={hamdlerCloseForm} />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}