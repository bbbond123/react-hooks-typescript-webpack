import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Modal } from 'antd';

export interface IPagination<T> {
  begin: number;
  count: number;
  end: number;
  index: number;
  list: T[];
  pageCount: number;
  size: number;
}

export interface IResponse<K> {
  message: string;
  result: K;
  status: string;
  code: number;
}

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
    // will be provided by API once domain is set up. remove when API complete.
  }
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return commonErrorHandler(error);
  }
);

interface IRequestFunction {
  <T = never, E = {}>(url: string, config?: AxiosRequestConfig): Promise<IResponse<T> & E>;
}

interface IPayloadRequestFunction {
  <T = never, E = {}>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IResponse<T> & E>;
}

class Request {
  static get: IRequestFunction = instance.get;
  static delete: IRequestFunction = instance.delete;
  static head: IRequestFunction = instance.head;
  static post: IPayloadRequestFunction = instance.post;
  static put: IPayloadRequestFunction = instance.put;
  static patch: IPayloadRequestFunction = instance.patch;
}

export default Request;

const commonErrorHandler = (error: AxiosError): Promise<IResponse<never>> => {
  if (error.response) {
    // Business Level Error
    if (
      error.response.status === 401 &&
      !['/web/rest/permissions', '/web/rest/login'].includes(error.response.config?.url || '')
    ) {
      Modal.error({
        title: error.response.data.message,
        onOk: () => {
          window.location.reload();
        }
      });
    }
    if (typeof error.response.data === 'object' && 'status' in error.response.data) {
      const status = error.response.data.status;
      const message = error.response.data.message || '未知错误';
      return Promise.reject({ status, message, ...error.response.data });
    }

    // Network Level Error
    const apiShortPath = (error.config.url || '').replace('/web/rest', '');
    const statusCode = error.response.status;
    const statusText = error.response.statusText;
    const message = `${apiShortPath} ${statusCode} (${statusText})`;
    return Promise.reject({ status: statusCode, message });
  }

  if (axios.isCancel(error)) {
    return Promise.reject(null);
  }

  return Promise.reject({
    status: 'unknown_failed',
    message: GENERIC_ERROR_MESSAGE
  });
};

export const GENERIC_SUCCESS_MESSAGE = '成功';
export const GENERIC_ERROR_MESSAGE = '错误';
