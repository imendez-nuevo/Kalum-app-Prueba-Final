import { createSlice } from "@reduxjs/toolkit";
const initialJornadaForm = {
    jornadaId: '',
    jornada: '',
    descripcion: ''
}

export const JornadasSlice = createSlice({
    name: 'jornadas',
    initialState: {
        jornadas: [],
        visibleForm: false,
        jornadaSelected: initialJornadaForm
    },
    reducers: {
        updateJornada: (state, action) => {
            state.jornadas = state.jornadas.map(ct => {
                if (ct.jornadaId === action.payload.jornadaId) {
                    return {
                        ...action.payload
                    };
                }
                return ct;
            });
            state.jornadaSelected = initialJornadaForm;
            state.visibleForm = false;
        },
        addJornada: (state, action) => {
            state.jornadas = [
                ...state.jornadas,
                {
                    ...action.payload
                }
            ];
            state.jornadaSelected = initialJornadaForm;
            state.visibleForm = false;
        },
        removeJornada: (state, action) => {
            state.jornadas = state.jornadas.filter(jornada => jornada.jornadaId !== action.payload);
        },
        loadingJornadas: (state, { payload }) => {
            state.jornadas = payload;
        },
        onJornadaSelectedForm: (state, { payload }) => {
            state.jornadaSelected = payload;
            state.visibleForm = true;
        },
        onOpenForm: (state) => {
            state.visibleForm = true;
        },
        onCloseForm: (state) => {
            state.visibleForm = false;
            state.jornadaSelected = initialJornadaForm;
        }
    }
});
export const {
    updateJornada,
    addJornada,
    removeJornada,
    loadingJornadas,
    onJornadaSelectedForm,
    onOpenForm,
    onCloseForm
} = JornadasSlice.actions;