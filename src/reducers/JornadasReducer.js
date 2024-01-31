export const JornadasReducer = (state = [], action) => {
    switch (action.type) {
        case 'addJornada':
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        case 'removeJornada':
            return state.filter(jornada => jornada.jornadaId !== action.payload);
        case 'updateJornada':
            return state.map(jornada => {
                if (jornada.jornadaId === action.payload.jornadaId) {
                    return { ...action.payload }
                }
                return jornada;
            });
        case 'loadingJornada':
            return action.payload;
        default:
            return state;



    }
}
