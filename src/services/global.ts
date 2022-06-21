import { request } from 'umi';

export async function init() {
  return request('/business/order/freeze_allot/params/init', {
    method: 'get',
  });
}

export async function creatInit() {
  return request('/business/order/guarantee_pay/creation/init', {
    method: 'get',
  });
}

export async function payParamsinit() {
  return request('/business/order/guarantee_pay/params/init', {
    method: 'get',
  });
}

export async function getReachAbleUrl(params: any) {
  return request('/common/getReachAbleUrl', {
    method: 'get',
    params,
  });
}

export async function getAccountById(params: any) {
  return request('/business/account/search/getAccountById', {
    method: 'get',
    params,
  });
}
