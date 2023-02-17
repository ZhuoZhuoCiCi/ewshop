import request from '../untils/request';
//登录接口
export function login(data:object){
   return request({
       url:'/api/auth/login',
       method:'post',
       data,
   })
}
export function user(){
    return request({
        url:'/api/admin/user',
        method:'get',
    })
}
