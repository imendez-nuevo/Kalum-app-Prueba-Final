import kalumApi from "../apis/KalumApi";
const BASE_URL = '';
export const findAll = async () => {
    try {
        const response = await kalumApi.get(`${BASE_URL}/jornadas`);
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const save = async (jornada) => {
    try {
        return await kalumApi.post(`${BASE_URL}/jornadas`, jornada);
    } catch (error) {
        console.log(error);
    }
    return null;

}

export const remove = async (id) => {
    try {
        return await kalumApi.delete(`${BASE_URL}/jornadas/${id}`);
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const update = async ({ jornadaId, jornada }) => {
    try {
        return await kalumApi.put(`${BASE_URL}/jornadas/${jornadaId}`, { jornada });
    } catch (error) {
        console.log(error);
    }

}