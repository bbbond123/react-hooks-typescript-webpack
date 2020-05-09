import request from '@/api/request';

export const apiWebLogout = async () => await request.post('/web/rest/logout');
