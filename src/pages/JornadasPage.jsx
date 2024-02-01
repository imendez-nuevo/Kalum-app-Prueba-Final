import { useEffect } from "react"
import { JornadasList } from "../components/jornadas/JornadasList"
import { JornadasModalForm } from "../components/jornadas/JornadasModalForm"
import { useJornadas } from "../hooks/useJornadas"
import { useCarreraTecnica } from "../hooks/useCarreraTecnica"
import { useExamenAdmision } from "../hooks/useExamenAdmision"

export const JornadasPage = () => {
  const { getJornadas, visibleForm, handlerOpenForm } = useJornadas();
  const {getCarrerasTecnicas} = useCarreraTecnica();
  const {getExamenesAdmision} = useExamenAdmision();
  useEffect(() => {

    getJornadas();
    getCarrerasTecnicas();
    getExamenesAdmision();
  }, []);

  return (
    <>
      {!visibleForm || <JornadasModalForm />}
      <div className="container mt-4 my-4">
        <h2><span className="col-12 badge bg-success">Jornadas</span></h2>
        <div className="row">
          <div className="col">
            {visibleForm || <button onClick={handlerOpenForm} className="btn btn-primary my-2">Nueva Jornada</button>}
            <JornadasList />
          </div>
        </div>
      </div>
    </>
  )
}