const globalModel = {
  namespace: 'global',
  state: {
    user: {}
  },
  effects: {},
  reducers: {
    changeUser(state: any, { payload }: any) {
      return { ...state, ...payload }
    }
  },
};
export default globalModel;