function test(){
    var uname = loginFrm.username.value
    console.log(uname);
    /*if(uname == ''){
        alert('用户名不能为空')
        loginFrm.username.focus()
    }*/
    
    /*if(uname.length < 3){
        alert('用户名不能小于3')
        loginFrm.username.focus()
    }*/
    
    /*for(var i = 0; i < uname.length; i++){
        if(uname[i] == '*'){
            alert('用户名不能含有*')
            loginFrm.username.focus()
        }
    }*/
    
    /*if(uname.indexOf('*')>-1){
        alert('用户名不能含有*')
        loginFrm.username.focus()
    }*/
    
    /*var words = "this is an apple"
    var arr = words.split('')
    console.log(arr.length);*/
    
    /*var email = 'admin@163.com'
    var i = email.indexOf('@')
    var j = email.lastIndexOf('.')
    // console.log(email.substr(0,i));
    // console.log(email.substr(i + 1,j - i - 1));
    console.log(email.substr(j + 1));*/
    // var arr = ['北京'，'上海'];
    
    /*var sid = loginFrm.stu_id.value;
    var letters = '0123456789';
    for(var i = 0;i < sid.length; i++){
        var char = sid[i];
        if(letters.indexOf(cahr) == -1){
            alert('学号必须是全数字');
            return false;
        }
    }

    var letters = '!#&%^@';
    for(var i = 0;i < sid.length; i++){
        var char = sid[i];
        if(letters.indexOf(cahr) > -1){
            alert('不能出现非法字符');
            return false;
        }
    }*/

    var reg/^[1-9]\d*$/; //正则表达式

}