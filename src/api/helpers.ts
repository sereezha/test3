import { AxiosResponse } from 'axios';

export const responseBody = <T>(response: AxiosResponse<T>) => response.data;
