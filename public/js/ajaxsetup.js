// 执行了设置之后，后续的所有的ajax请求，都会拥有以下的默认设置
$.ajaxSetup({
  headers: {
    'Authorization': Cookies.get('auth_token'),
    'zts': 'aicoder.com'
  },
  statusCode: {
    '401': function (status, xhr) {
      // 用户没有登录直接访问 /api/接口
      $
        .messager
        .show({timeOut: 1500, title: '提醒消息', msg: '请先登录！2秒后自动调整到登录页面！', closable: true});
      setTimeout(function () {
        window.location.href = './login.html';
      }, 2000)
    }
  }
});