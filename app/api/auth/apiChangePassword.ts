import request from '@/api/request';

interface IApiChangePasswordPayload {
  newPassword: string;
  oldPassword: string;
}

interface IApiChangeRiskPasswordPayload {
  newRiskPass: string;
  oldRiskPass: string;
}

export const apiChangePassword = (data: IApiChangePasswordPayload) => {
  const url = '/web/rest/changepassword';
  const body: IApiChangePasswordPayload = data;
  return request.post(url, body);
};

export const apiChangeRiskPassword = (data: IApiChangePasswordPayload) => {
  const url = '/web/rest/changeriskpassword';
  const body: IApiChangeRiskPasswordPayload = {
    newRiskPass: data.newPassword,
    oldRiskPass: data.oldPassword
  };
  return request.post(url, body);
};
