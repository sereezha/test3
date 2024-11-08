import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { mockMail } from '../../components/email-viewer/helpers';
import { ApiResponseStatus } from '../../constants/api-status';
import { LocalStorage } from '../../constants/storage';
import { emailsList } from '../../mocks/emails';
import {
  emailBoxes,
  favoriteEmailBoxes,
  transformEmailBoxesResponse,
} from '../../mocks/tree-view';
import { TEmailCategory } from '../../types/emails';
import { sleep } from '../../utils/generic';
import { responseBody } from '../helpers';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL ?? '',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem(LocalStorage.ACCESS_TOKEN);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async (response) => response,
  async (error: AxiosError) => {
    console.error('error', error);

    // in case we received not expected error then default to 500
    const status = (error.response as AxiosResponse)?.status ?? 500;

    switch (status) {
      case ApiResponseStatus.BAD_REQUEST:
        // alert('bad request: ' + data.message);
        break;
      case ApiResponseStatus.UNAUTHORIZED:
        {
          // execute token refresh
          const originalRequest = error.config;

          if (originalRequest?.url !== '/refresh') {
            // const { accessToken, refreshToken } = await getNewTokens();
            // originalRequest!.headers!.Authorization = `Bearer ${accessToken}`;
            // return axios(originalRequest!);
          }

          //  logout
        }
        break;
      case ApiResponseStatus.FORBIDDEN:
        break;
      case ApiResponseStatus.NOT_FOUND:
        break;
      case ApiResponseStatus.VALIDATION_ERROR:
        break;
      default:
        break;
    }

    return Promise.reject(error);
  }
);

export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig<T>) =>
    axiosClient.get<T>(url, config).then(responseBody),
  post: <T>(url: string, body?: T, config?: AxiosRequestConfig<T>) =>
    axiosClient.post<T>(url, body, config).then(responseBody),
  put: <T>(url: string, body: T, config?: AxiosRequestConfig<T>) =>
    axiosClient.put<T>(url, body, config).then(responseBody),
  del: <T>(url: string) => axiosClient.delete<T>(url).then(responseBody),
};

export const requests = {
  getEmailBoxes: () =>
    sleep(1000).then(() => transformEmailBoxesResponse(emailBoxes)),
  getFavoriteEmailBoxes: () =>
    sleep(1000).then(() => transformEmailBoxesResponse(favoriteEmailBoxes)),
  getEmailsList: (
    boxName: string,
    category: TEmailCategory,
    page: number = 1
  ) =>
    sleep(1000).then(() =>
      emailsList[boxName][category].slice((page - 1) * 100, 100 * page)
    ),
  getEmail: (boxName: string, category: TEmailCategory, emailId: string) =>
    sleep(1000).then(() => mockMail),
};
