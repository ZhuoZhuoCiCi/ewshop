import axios from "axios";
const request = axios.create({
    baseURL:'https://api.shop.eduwork.cn/',
    timeout:8000,
})
const win:any = window;
//请求拦截器
request.interceptors.request.use((config)=>{

    const token = localStorage.getItem('token');
if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
}
    return config;

},(error)=>{
    return Promise.reject(error);
});
request.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    const {response} = error;
    switch (response.status) {
        case 401:
            win.$message.error("登陆失败，请重新登录");
            localStorage.removeItem('token');
            setTimeout(() => {
                win.location.href = '/login';

            }, 500);
            break;
        case 404:
            win.$message.error("接口不存在");
            break;
        case 500:
        case 502:
            win.$message.error("网络异常");
            break;
            break;
        case 422: {
            const msg = response.data.errors[Object.keys(response.data.errors)[0]][0];
            win.$message.error(msg);
            // window.$message.error('邮箱已存在')
            break;
        }
    }

    return Promise.reject(error);
});
export default request;
