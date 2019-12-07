import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject(['MyMobx'])
@observer
class Page2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  };
  render() {
    // console.log(this.props.location.state.id)
    console.log(this.props.location.params)
    return (
      <div style={{
        width: '100%',
        height: window.innerHeight,
        background: '#001D37',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <div
          onClick={() => {
            this.props.history.push('/')
            // this.props.history.push({pathname:'/'}) 
            // this.props.history.push({pathname:"/",state : { id : '222' }});
          }}
          style={{
            width: '500px',
            height: '200px',
            background: '#ff0',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center',
            lineHeight: '200px',
            cursor: 'pointer',
          }}>
          我是页面二二二二二二二二
          点我可以去页面一
        </div>
        <div
          onClick={() => {
            this.props.MyMobx.addNumber()
          }}
          style={{
            width: '300px',
            height: '100px',
            marginTop: '20px',
            background: '#ff0',
            lineHeight: '100px',
            textAlign: 'center',
            borderRadius: '10px',
            cursor: 'pointer',
          }}>
          mobx中的数字是{this.props.MyMobx.number}&nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{ display: 'inline' }}>点击增加</div>
        </div>
      </div>
    )
  }
}

export default Page2
