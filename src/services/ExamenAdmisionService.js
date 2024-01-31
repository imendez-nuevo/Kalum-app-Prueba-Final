import kalumApi from '../apis/KalumApi';
const BASE_URL = '';
export const findAll = async () => {
    try {
        const response = await kalumApi.get(`${BASE_URL}/examenes-admision`);
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const save = async (fechaExamen) => {
    try {
        return await kalumApi.post(`${BASE_URL}/examenes-admision`, fechaExamen);
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const remove = async (id) => {
    try {
        return await kalumApi.delete(`${BASE_URL}/examenes-admision/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const update = async ({ examenId, fechaExamen }) => {
    try {
        return await kalumApi.put(`${BASE_URL}/examenes-admision/${examenId}`, { fechaExamen });
    } catch (error) {
        console.log(error);
    }
}