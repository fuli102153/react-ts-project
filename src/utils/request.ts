import axios, { AxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";

const BASE_CONFIG: Partial<AxiosRequestConfig> = {
  baseURL: "/backend/api",
};

const client = axios.create(BASE_CONFIG);
axiosRetry(client, { retries: 3 });

const http = async <T>(
  method: AxiosRequestConfig['method'],
  url: string,
  config?: AxiosRequestConfig,
) => {
  try {
    const res = await client(url, { method, ...config })
    if (res?.data?.status) {
      console.log(res.data)
    }
    return res
  }
  catch (err) {
    console.log(err)
    return undefined
  }
}

/** get请求 */
const httpGet = <T>(url: string, config?: AxiosRequestConfig) => http<T>('GET', url, config)
/** post请求 */
const httpPost = <T>(url: string, data?: AxiosRequestConfig['data'], config?: AxiosRequestConfig) => http<T>('POST', url, {data, ...config})

export {
  httpGet,
  httpPost
}