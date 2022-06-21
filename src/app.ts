import { ResponseError } from 'umi-request';
import { notification, message } from 'antd';
import { host } from '@/utils/env';
import { ELKLog } from '@/utils/utils';
import { init, creatInit, payParamsinit } from '@/services/global';
import { getDvaApp } from 'umi';

export const qiankun = {
  // 应⽤加载之前
  async bootstrap() {
  },
  // 应⽤ render 之前触发
  async mount(props: any) {},
  // 应⽤卸载之后触发
  async unmount() {},
};

export async function getInitialState() {
  return {};
}

export const patchRoutes = ({ routes }: any) => {
  const { env } = window as any;
  routes[0]?.routes?.forEach((item: any) => {
    item.layout = env === 'online' ? false : true;
  });
};

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/** 异常处理程序
 * @see https://beta-pro.ant.design/docs/request-cn
 */
const errorHandler = (error: ResponseError) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }

  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  throw error;
};

export const request: any = {
  prefix: host,
  timeout: 3000,
  // 解决应用嵌套带来的跨域问题
  credentials: 'include',
  errorHandler,
};
