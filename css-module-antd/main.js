/**
 * Created by huhai on 17/6/29.
 */
import React from 'react'
import {Button} from 'antd'
import ReactDOM from 'react-dom';
import style from './outer.css'
  require('antd/lib/button/style/index.css')
var Dom = ()=>{
  debugger
  return <div className={style.hu}> sdfsaf
    <Button type="primary">Primary</Button>
  </div>
}


ReactDOM.render(
  <Dom/>,
  document.getElementById('app')
);
