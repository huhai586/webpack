/**
 * Created by huhai on 17/6/29.
 */
// import $ from 'jquery'
let x={name:'huhai',sex:"male"}
let y =[1,2,3]
function showARG() {
  console.log(y,arguments.length)
  debugger
}

showARG(...y)