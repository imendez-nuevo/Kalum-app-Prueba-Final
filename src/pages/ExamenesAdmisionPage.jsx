import { useEffect } from "react"
import { ExamenAdmisionModalForm } from "../components/examenes-admision/ExamenAdmisionModalForm";
import { useExamenAdmision } from "../hooks/useExamenAdmision"
import { ExamenAdmisionList } from "../components/examenes-admision/ExamenAdmisionList"
export const ExamenesAdmisionPage = () => {
  const { getExamenesAdmision, visibleForm, handlerOpenForm } = useExamenAdmision();
  useEffect(() => {
    getExamenesAdmision();
  }, []);
  return (
    <>
      {!visibleForm || <ExamenAdmisionModalForm />}
      <div className="container mt-4 my-4">
        <h2><span className="col-12 badge bg-success">Examenes de admision</span></h2>
        <div className="row">
          <div className="col">
            {visibleForm || <button onClick={handlerOpenForm} className="btn btn-primary my-2">Nuevo  examen</button>}
            <ExamenAdmisionList />
          </div>
        </div>
      </div>
    </>
  )
}