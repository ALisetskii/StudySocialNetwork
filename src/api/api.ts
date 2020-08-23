import axios from "axios";
import {ProfileType} from "../types/types";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d815e466-8076-4a88-8dcb-7a359475031b"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}

export enum ResultCodesEnum {
    Success =0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}

type MeResponseType = {
    data: {
        id: number,
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type LoginResponseType = {
    data: {
        userId: number,
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}


export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res=>res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha}).then(res=>res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get(`profile/` + userId).then(res => res.data);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId).then(res => res.data);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status}).then(res => res.data);
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile/`, profile).then(res => res.data);
    }
}
export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    },
}

