//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    email:"",
    passwd:"",
  },

  onLoad: function () {

  },
  //获取输入框数据
  getEmail:function(e){
    this.setData({
      email: e.detail.value
    })
  },
  //获取输入框数据
  getPasswd: function (e) {
    this.setData({
      passwd: e.detail.value
    })
  },
  /*
  * 验证用户名密码是否正确
   */
  checkLogin:function(){
    var email=this.data.email;
    var passwd = this.data.passwd;
    var data={
      loginfrom:"app",
      email: email,
      psw: passwd,
      output: "json"
    };
    var url = "http://10.12.206.88:8080/c/u/user/profile";
    wx.request({
        url: url,
        method: 'GET',
        data: data,
        header: {
          'Content-Type': 'application/json'
        },
        success(res) {
            console.log(res)
          if(res.data.code=200){
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
          }
        }
    });
  }
})