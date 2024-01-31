
import { useEffect } from "react"
import { CarreraTecnicaModalForm } from "../components/carreras-tecnicas/CarreraTecnicaModalForm"
import { useCarreraTecnica } from "../hooks/useCarreraTecnica"
import { CarreraTecnicaList } from "../components/carreras-tecnicas/CarreraTecnicaList";

export const CarrerasTecnicasPage = () => {
  //const {visibleForm,handlerOpenForm } = useContext(CarreraTecnicaContext);
  const { getCarrerasTecnicas, visibleForm, handlerOpenForm } = useCarreraTecnica();
  useEffect(() => {
    getCarrerasTecnicas();
  }, []);
  return (
    <>
      {!visibleForm || <CarreraTecnicaModalForm />}
      <div className="container mt-4 my-4">
        <h2><span className="col-12 badge bg-success">Carreras técnicas</span></h2>
        <div className="row">
          <div className="col">
            {visibleForm || <button onClick={handlerOpenForm} className="btn btn-primary my-2">Nueva carrera</button>}
            <CarreraTecnicaList />
          </div>
        </div>
      </div>
    </>
  )
}