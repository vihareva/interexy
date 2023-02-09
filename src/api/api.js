import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
});

instance.interceptors.response.use(function (response) {
    // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
    // Здесь можете сделать что-нибудь с ответом
    console.log('resp 200')
    return response;
}, function (error) {
    // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
    // Здесь можете сделать что-то с ошибкой ответа
    return Promise.reject(error);
});

export const getCharactersByName = async (name) => {
    try {
        const result = await instance.get(`character/?name=${name}`);
        return result.data.results;
    } catch (e) {
        console.log('error')
    }
};

export const getCharactersById = async (ids) => {
    try {
        const result = await instance.get(`character/${ids}`);
        return result.data;
    } catch (e) {
        console.log('error')
    }

};