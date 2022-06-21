import accountApi from './accountApi';
import orderApi from './orderApi';
import frozenApi from './frozenApi';

const API = {
  ...accountApi,
  ...orderApi,
  ...frozenApi
};

export default API;
