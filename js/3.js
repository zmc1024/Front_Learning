function test(){
    var uname = loginFrm.username.value;
    if(uname.length == 0){
        alert('用户名不能为空');
        loginFrm.username.focus();
        return false;
    }
    // loginFrm.submit();
    return true;
}