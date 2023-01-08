var email = document.getElementById("email");
var pass = document.getElementById("pass");
var repass = document.getElementById("repass");
function kiemtra(){
    if(email.value == "" || pass.value == "" || repass == ""){
        alert('nhập đủ');
        return false;
    }
    if(pass.value.length <= 6){
        alert("pass 6");
        return false;
    }
    if(pass.value.length != repass.value.length){
        alert(" không thành công");
        return false;
    }
}