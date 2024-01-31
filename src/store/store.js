import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { carrerasTecnicasSlice } from "./slices/carreras-tecnicas/carrerasTecnicasSlice"
import { JornadasSlice } from "./slices/jornadasSlice/jornadasSlice";
import { aspirantesSlice } from "./slices/aspirantes/aspirantesSlice";
import { examenesAdmisionSlice } from "./slices/ExamenAdmisionSlice/ExamenAdmisionSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        carrerasTecnicas: carrerasTecnicasSlice.reducer,
        jornadas: JornadasSlice.reducer,
        examenesAdmision:examenesAdmisionSlice.reducer,
        aspirantes: aspirantesSlice.reducer
    }
});