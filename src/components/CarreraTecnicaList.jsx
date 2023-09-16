import { CarreraTecnicaRow } from "./CarreraTecnicaRow"

export const CarreraTecnicaList = ({carreraTecnicas}) => {
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Carrera Técnica</th>
                    <th>Update</th>
                    <th>Delete</th>


                </tr>
            </thead>
            <tbody>
                {
                   carreraTecnicas.map(({codigo,nombre}) => (
                        <CarreraTecnicaRow key= {codigo} codigo={codigo} nombre={nombre} />
                   ))
                   
         
                }
            </tbody>
        </table>
    )
}