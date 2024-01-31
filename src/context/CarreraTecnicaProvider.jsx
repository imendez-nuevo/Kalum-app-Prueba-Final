import { useCarreraTecnica } from "../hooks/useCarreraTecnica"
import { CarreraTecnicaContext } from "./CarreraTecnicaContext";

export const CarreraTecnicaProvider = ({ children }) => {
    const {
        initialCarreraTecnicaForm,
        handlerAddCarreraTecnica,
        handlerRemoveCarreraTecnica,
        handlerCarreraTecnicaSelectedForm,
        handlerUpdateCarreraTecnica,
        hamdlerCloseForm,
        handlerOpenForm,
        visibleForm,
        carreraTecnicaSelected,
        carrerasTecnicas,
        getCarrerasTecnicas
    } = useCarreraTecnica();
    return (
        <CarreraTecnicaContext.Provider value={{
            initialCarreraTecnicaForm,
            handlerAddCarreraTecnica,
            handlerRemoveCarreraTecnica,
            handlerCarreraTecnicaSelectedForm,
            handlerUpdateCarreraTecnica,
            hamdlerCloseForm,
            handlerOpenForm,
            visibleForm,
            carreraTecnicaSelected,
            carrerasTecnicas,
            getCarrerasTecnicas
        }}>
            {children}
        </CarreraTecnicaContext.Provider>


    )
}