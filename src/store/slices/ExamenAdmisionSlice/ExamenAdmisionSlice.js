import { createSlice } from "@reduxjs/toolkit";

const initialExamenAdmisionForm = {
    examenId: '',
    fechaExamen: ''
}

export const examenesAdmisionSlice = createSlice({
    name: 'examenesAdmision',
    initialState: {
        examenesAdmision: [],
        visibleForm: false,
        examenAdmisionSelected: initialExamenAdmisionForm
    },
    reducers: {
        updateExamenAdmision: (state, action) => {
            state.examenesAdmision = state.examenesAdmision.map(ct => {
                if (ct.examenId === action.payload.examenId) {
                    return {
                        ...action.payload
                    };
                }
                return ct;
            });
            state.examenAdmisionSelected = initialExamenAdmisionForm;
            state.visibleForm = false;
        },
        addExamenAdmision: (state, action) => {
            state.examenesAdmision = [
                ...state.examenesAdmision,
                {
                    ...action.payload
                }
            ];
            state.examenAdmisionSelected = initialExamenAdmisionForm;
            state.visibleForm = false;
        },
        removeExamenAdmision: (state, action) => {
            state.examenesAdmision = state.examenesAdmision.filter(fechaExamen => fechaExamen.examenId !== action.payload);
        },
        loadingExamenesAdmision: (state, { payload }) => {
            state.examenesAdmision = payload;
        },
        onExamenAdmisionSelectedForm: (state, { payload }) => {
            state.examenAdmisionSelected = payload;
            state.visibleForm = true;
        },
        onOpenForm: (state) => {
            state.visibleForm = true;
        },
        onCloseForm: (state) => {
            state.visibleForm = false;
            state.examenAdmisionSelected = initialExamenAdmisionForm;
        }
    }
});
export const {
    updateExamenAdmision,
    addExamenAdmision,
    removeExamenAdmision,
    loadingExamenesAdmision,
    onExamenAdmisionSelectedForm,
    onOpenForm,
    onCloseForm
} = examenesAdmisionSlice.actions;
