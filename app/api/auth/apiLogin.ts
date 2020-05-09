import request from '@/api/request';

interface IApiLoginResponse {
  success: any;
  session: string;
}

enum ELang {
  zh = 'zh',
  en = 'zh'
}
interface IApiLoginPayload {
  facode?: string;
  lang: ELang;
  password: string;
  username: string;
}

export interface ILoginPayload {
  facode?: string;
  username: string;
  password: string;
}

export const apiLogin = (data: ILoginPayload) => {
  const url = `/web/rest/login`;
  const body: IApiLoginPayload = { ...data, ...{ lang: ELang.zh } };
  return request.post<never, IApiLoginResponse>(url, body);
};
