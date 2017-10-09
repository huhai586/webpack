/**
 * Created by huhai on 17/6/29.
 */
import React from 'react'
import {Button} from 'antd'
import ReactDOM from 'react-dom';
require('./style.css');
require('antd/lib/button/style/index.css')
var Dom = ()=>{
  return <div> sdfsaf
    <Button type="primary">Primary</Button>
  </div>
}


ReactDOM.render(
  <Dom/>,
  document.getElementById('app')
);
