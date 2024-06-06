import axios from "axios";

let endPoints = [`${import.meta.env.VITE_APP_URL}/authentication`];

export const axiosInterceptorHandle = (navigate) => {
  axios.interceptors.response.use(
    (res) => {
      if (res.data["refresh"] !== undefined) {
        let headerAuth = res.data["access"];
        let headerRefresh = res.data["refresh"];

        localStorage.setItem(
          import.meta.env.VITE_APP_ACCESS_KEYWORD,
          headerAuth
        );
        localStorage.setItem(
          import.meta.env.VITE_APP_REFRESH_KEYWORD,
          headerRefresh
        );
      }
      return res;
    },
    (err) => {
      console.error("Error in response interceptor:", err);
      // Optionally handle navigation on error
      // if (navigate) {
      //   navigate('/login'); // or any other route
      // }
      return Promise.reject(err);
    }
  );

  axios.interceptors.request.use(
    (req) => {
      if (!endPoints.includes(req.url)) {
        let localDataAuth = localStorage.getItem(
          import.meta.env.VITE_APP_ACCESS_KEYWORD
        );
        if (localDataAuth) {
          req.headers.Authorization = "Bearer " + localDataAuth;
        }
      }
      return req;
    },
    (err) => {
      console.error("Error in request interceptor:", err);
      return Promise.reject(err);
    }
  );
};
