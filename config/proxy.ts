const serverIp = 'http://xxxx.com';
export default {
  dev: {
    '/api/': {
      target: serverIp,
      changeOrigin: true,
    },
  },
};
