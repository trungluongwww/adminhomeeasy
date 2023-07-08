import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api-admin`,
    timeout: 5000,
    headers: { 'content-type': 'application/json' },
});

axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const accessToken = localStorage.getItem('token');
            if (accessToken) {
                config.headers.setAuthorization(`Bearer ${accessToken}`);
            }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(processError(error));
    },
);

axiosClient.interceptors.response.use(
    function (response) {
        return response
    },
);

const processError = (error:Error) => {
    return {
        isError: true,
        msg: error.message,
    };
};

export default axiosClient;