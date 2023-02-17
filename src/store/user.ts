import { defineStore } from 'pinia'
import {login,user}from'@/api/auth'
//定义state中的数据类型
export interface IUserState {
    token: string;
    username: string;
    avatar_url: string;
    permissions: string[];
    info:any;
}
export const useUserStore = defineStore({
    id:'app-user',
    state:():IUserState=>({
        token:localStorage.getItem('token')||'',
        username:'',
        avatar_url:'',
        permissions:[],
        info:{},
    }),
    getters:{
    //    接收
        getToken():string{
            return this.token;
        },
        getUserName():string{
            return this.username;
        },
        getAvatar():string{
            return this.avatar_url;
        },
        getPermissions():string[]{
            return this.permissions;
        },
    },
    actions: {
        //登录
        setToken(token: string) {
            localStorage.setItem('token', token);
            this.token = token;
        },
        setUserName(username: string) {
            this.username = username;
        },
        setAvatar(avatar_url: string) {
            this.avatar_url = avatar_url;
        },
        setPermissions(permissions: string[]) {
            this.permissions = permissions;
        },
        setInfo(info: object) {
            this.info = info;
        },
        //异步登录
        async login(userInfo: object) {
            try {
                const response: any = await user();
                if (response.access_token){
                    this.setToken(response.access_token);
                }
            } catch (error) {
                // console.log(error)
            }
        },
        async getUser(){
            try{
                const response:any=await user();
               this.setInfo(response);
               this.setAvatar(response.avatar_url);
               this.setUserName(response.username);
               return response;
                }catch (error){
                    // console.log(error)
            }

        }

    }
});