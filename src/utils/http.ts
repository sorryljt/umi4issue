/**
 * Created by lunachi on 2018/4/19.
 * http 数据请求
 * 支持：get、post、jsonp
 */

import Axios from 'axios';
import Jsonp from 'jsonp';
import Qs from 'qs';
import { ELKLog } from '@/utils/utils';
import { host } from '@/utils/env';
import { getDvaApp } from 'umi';

const user = getDvaApp()?._store.getState().global.user;

export const parseUrl = (url = '') => {
  const _query = (url.match(/(\?.*$)/) || [''])[0];
  const _url = url.replace(_query, '');
  let _data = {};
  if (_query) {
    _data = Qs.parse(_query, {
      ignoreQueryPrefix: true,
    });
  }
  return {
    url: _url,
    query: _data,
  };
};

export const jsonp = (url: string, data = {}, config = {}, showLoading = false) => {
  return new Promise((resolve, reject) => {
    const _urlObj = parseUrl(url);
    const _data = Object.assign({}, _urlObj.query, data);

    const _url = `${_urlObj.url}${Qs.stringify(_data, { addQueryPrefix: true })}`;
    const _config = Object.assign(
      {
        prefix: 'jp',
        param: 'jsoncallback',
        timeout: 3000,
      },
      config,
    );

    Jsonp(_url, _config, function(err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

export const get = (url, data = {}, config = {}) => {
  const _urlObj = parseUrl(url);
  const user = getDvaApp()?._store.getState().global.user;
  const _data = Object.assign({}, _urlObj.query, data);
  const _config = Object.assign(
    {
      withCredentials: true,
      timeout: 3000,
      params: _data,
      baseURL: host,
      headers: {
        ...config?.headers,
        'x-username': user?.name || '',
        'x-name': user?.realName || '',
      },
    },
    config,
  );

  return Axios.get(_urlObj.url, _config)
    .then(res => {
      return res.data;
    })
    .then(data => {
      ELKLog(data, _config, 'info', _urlObj.url, '房金融商家后台', user);
      return data;
    })
    .catch(err => {
      ELKLog(data, _config, 'error', _urlObj.url, '房金融商家后台', user);
      return err;
    });
};

export const post = (
  url,
  data = {},
  contentType = 'application/json;charset=utf-8',
  config = {},
  qs = false,
) => {
  //  data = compactObj(data);
  const user = getDvaApp()?._store.getState().global.user;
  const _config = Object.assign(
    {
      withCredentials: true,
      timeout: 3000,
      headers: {
        ...config?.headers,
        'content-type': contentType,
        'x-username': user?.name || '',
        'x-name': user?.realName || '',
      },
      baseURL: host,
    },
    config,
  );
  return Axios.post(url, qs ? Qs.stringify(data) : data, _config)
    .then(res => {
      return res.data;
    })
    .then(data => {
      ELKLog(data, _config, 'info', url, '房金融商家后台', user);
      return data;
    })
    .catch(err => {
      ELKLog(data, _config, 'error', url, '房金融商家后台', user);
      return err;
    });
};
