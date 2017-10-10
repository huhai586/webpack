/**
 * Created by huhai on 2017/7/16.
 */
const name="我是第一"
module.exports= {
  name: name,
  showName: function(){
    console.log("name is: ",this.name)
  }
}