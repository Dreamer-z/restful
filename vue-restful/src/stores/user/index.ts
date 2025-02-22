import Axios from '../../../utils/axios';
import { defineStore } from 'pinia'
import Api from "@/views/user/api";

export const userInfo = defineStore('userInfo', {
    state: () => {
        return {
            userInfo: null
        }
    },
    getters: {
        getUser: (state) => state.userInfo
    },
    actions: {
        getUserInfo(): void {
            Axios.get(Api.user).then((res: any) => {
                this.userInfo = res.data || null;
            })
        },
    }
})
