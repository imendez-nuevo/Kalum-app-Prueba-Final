import { useExamenAdmision } from "../hooks/useExamenAdmision";
import { ExamenAdmisionContext } from "./ExamenAdmisionContext";

export const ExamenAdmisionProvider = ({ children }) => {
    const {
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
    } = useExamenAdmision();
    return (
        <ExamenAdmisionContext.Provider value={{
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
        }}>
            {children}
        </ExamenAdmisionContext.Provider>


    )
}