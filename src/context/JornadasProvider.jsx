import { useJornadas } from "../hooks/useJornadas"
import { JornadasContext } from "./JornadasContext";

export const JornadasProvider = ({ children }) => {
    const {
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
    } = useJornadas();
    return (
        <JornadasContext.Provider value={{
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
        }}>
            {children}
        </JornadasContext.Provider>


    )
}