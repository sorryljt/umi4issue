import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';
import defaultSettings from './defaultSettings';
import { resolve } from 'path';

export default defineConfig({
  model: {}, // 开启数据流
  antd: {}, // 开启antd
  request: {}, // 开启umi-request
  initialState: {},
  mock: false,
  dva: {},
  // layout: {
  //   locale: false,
  //   siderWidth: 218,
  //   ...defaultSettings,
  // },
  locale: {
    default: 'zh-CN',
    antd: true,
  },
  fastRefresh: true,
  qiankun: {
    slave: {}, //作为⼦应⽤，开启qiankun
  },
  base: '/super/system/fangjr',
  routes,
  outputPath: 'build',
  alias: {
    '@': resolve(__dirname, './src'),
    styles: resolve(__dirname, './src/styles'),
    utils: resolve(__dirname, './src/utils'),
    components: resolve(__dirname, './src/components'),
  },
  ignoreMomentLocale: true,
  proxy: proxy['dev'],
  // // 开启webpack5 模块联邦，提高构建速度,此功能默认开
  // mfsu: {
  //   esbuild: true
  // },
});
