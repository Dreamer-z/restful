import Axios from '../../../utils/axios';
import { defineStore } from 'pinia'
import Api from "@/views/login/api";

export const useXCsrfToken = defineStore('useXCsrfToken', {
    state: () => {
        return {
            x_csrf_token: ''
        }
    },
    getters: {
        getToken: (state) => state.x_csrf_token
    },
    actions: {
        setToken(): void {
            Axios.get(Api.cookie).then((res: any) => {
                this.x_csrf_token = res.data || '';
                sessionStorage.setItem("x_csrf_token", res.data);
            })
        },
        login(data: any) {
            return Axios.post(Api.login, data)
        },
        logout(data: any) {
            return Axios.post(Api.logout, data)
        }
    }
});
