export const ExamenesAdmisionReducer = (state = [], action) => {
    switch (action.type) {
        case 'addExamenAdmision':
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        case 'removeExamenAdmision':
            return state.filter(fechaExamen => fechaExamen.examenId !== action.payload);
        case 'updateExamenAdmision':
            return state.map(examen => {
                if (examen.examenId === action.payload.examenId) {
                    return { ...action.payload }
                }
                return examen;
            });
        case 'loadingExamenes':
            return action.payload;
        default:
            return state;



    }
}
