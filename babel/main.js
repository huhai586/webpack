/**
 * Created by huhai on 17/6/29.
 */
// import $ from 'jquery'
let x={name:'huhai',sex:"male"}
let y ={...x}
function showARG() {
  console.log(y)
  debugger
}

showARG(...y)