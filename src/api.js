import axios from 'axios'
import router from './router'
var api = axios.create({
    // baseURL: 'https://some-domain.com/api/',
    timeout: 5000,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
});
// 添加请求拦截器
api.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 如果有token,添加到请求报文 后台会根据该报文返回status
    var token = window.localStorage.getItem("token")
    // console.log(token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
     alert('网络错误,请稍后再试');
    return Promise.reject(error);
  });

// 添加响应拦截器
api.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    if (error.response) {
        if (error.response.status == 401) {
            // 如果返回401 即没有权限，跳到登录页重新登录
            // store.commit('CHANGE_TOKEN', 0);

            // alert('请重新登录');

            router.replace({
                path: '/',
                // query: { redirect: router.currentRoute.fullPath }
            })

        }
    }
    return Promise.reject(error);
  });
  export default api
