export const carrerasTecnicasReducer = (state = [], action) => {
    switch (action.type) {
        case 'addCarreraTecnica':
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        case 'removeCarreraTecnica':
            return state.filter(carreraTecnica => carreraTecnica.carreraId !== action.payload);
        case 'updateCarreraTecnica':
            return state.map(carrera => {
                if (carrera.carreraId === action.payload.carreraId) {
                    return { ...action.payload }
                }
                return carrera;
            });
        case 'loadingCarreras':
            return action.payload;
        default:
            return state;



    }
}
