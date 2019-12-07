import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject(['MyMobx'])
@observer

class Page1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  };
  render() {
    return (
      <div
      style={{
        width: '100%',
        height: window.innerHeight,
        background: '#001D37',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column'
      }}>
        <div
          onClick={() => {
            // this.props.history.push('/page2/' + 666 + '')
            this.props.history.push({ pathname: '/page2' })
            // this.props.history.push({pathname:"/page2",state : { id : '111' }});
          }}
          style={{
            width: '500px',
            height: '200px',
            background: '#fff',
            padding: '30px',
            borderRadius: '10px',
            lineHeight: '200px',
            textAlign: 'center',
            cursor: 'pointer',
          }}>
          我是页面一一一一一一一
          点我可以去页面二
        </div>
        <div
        onClick={()=>{
          this.props.MyMobx.addNumber()
        }}
        style={{
          width: '300px',
          height: '100px',
          marginTop:'20px',
          background: '#fff',
          lineHeight:'100px',
          textAlign:'center',
          borderRadius:'10px',
          cursor: 'pointer',
        }}>
          mobx中的数字是{this.props.MyMobx.number}&nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{display:'inline'}}>点击增加</div>
        </div>
      </div>
    )
  }
}

export default Page1
