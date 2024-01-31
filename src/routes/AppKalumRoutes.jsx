import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { CarrerasTecnicasPage } from '../pages/CarrerasTecnicasPage'
import { JornadasPage } from '../pages/JornadasPage'
import { ExamenesAdmisionPage } from "../pages/ExamenesAdmisionPage"



export const AppKalumRoutes = () => {
    return (
        <>

            <Navbar />
            <Routes>
                <Route path="carreras-tecnicas" element={<CarrerasTecnicasPage />} />
                <Route path="jornadas" element={<JornadasPage />} />
                <Route path='examenes-admision' element={<ExamenesAdmisionPage />} />
                <Route path="/" element={<Navigate to="/carreras-tecnicas" />} />

            </Routes>
        </>
    )
}