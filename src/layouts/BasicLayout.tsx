import React from 'react'
import type { ReactNode } from 'react'
import { Result } from 'antd';
import styles from './BasicLayout.less'
import { connect, connectMaster, Outlet } from 'umi'

type BasicLayoutProps = {
  children: ReactNode,
  dispatch: any,
  user?: any
}

type BasicLayoutState = {
  iserror: boolean
}

const { Beidou } = window as any
class BasicLayout extends React.PureComponent<BasicLayoutProps, BasicLayoutState> {

  state = {
    iserror: false
  }

  componentDidCatch(error: any, errorInfo: any) {
    if (error) {
      this.setState({iserror: true})
    }
  }

  componentDidMount() {
    if ((window as any).env === 'online') {
      this.props.dispatch({
        type: 'global/changeUser',
        payload: {
          user: {
            name: this.props.user.name,
            realName: window.encodeURI(this.props.user.realName)
          }
        }
      })
    }
  }

  render () {
    return (
      <>
        {this.state.iserror? 
          <Result
            status="warning"
            title="页面代码报错了o(╥﹏╥)o，请联系相关开发人员"
            style={{ height: 'calc(100vh - 64px)'}}
          />  
          :
          <div className={styles.basicLayout}>
            <div className={styles.content}>
              {Outlet}
            </div>
          </div>
        }
      </>
    )
  }
}

export default connect(
  ({ global }: any) => ({ user: global.user})
)(connectMaster(BasicLayout))