function register(e){
    event.preventDefault();
    var fullname = document.getElementById('fullname').value;
    var ageuser = document.getElementById('ageuser').value;
    var genderuser = document.getElementById('genderuser').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailRegex = /^[^\s@]+@gmail\.com$/;
    var usedEmails = [];
    var user = {
        fullname : fullname,
        ageuser : ageuser,
        genderuser : genderuser,
        email : email,
        password : password,
    };

    if(fullname == '' || ageuser == '' || genderuser == '' || email == '' || password == '') {
        alert("Tất cả thông tin không được để trống");
    }else if(isNaN(ageuser)){
        alert("Tuổi phải là số")
    }else if(ageuser < 18 || ageuser > 100) {
        alert("Tuổi không hợp lệ! Phải ít nhất 18 tuổi hoặc Giá trị độ tuổi không hợp lệ");
    }else if(genderuser !== 'nam' && genderuser !== 'nữ' && genderuser !== 'Nam' && genderuser !== 'Nữ') {
        alert("Giới tính phải là nam hoặc nữ");
    }else if(!emailRegex.test(email)){
        alert("Email phải đúng định dạng @gmail.com");
    }else if(usedEmails.includes(email)){
        alert("Email đã tồn tại");
    }else if(password.length < 8) {
        alert("Mật khẩu cần ít nhất 8 ký tự");
    }else { 
        let userPiyo = localStorage.getItem("userPiyo");
        if(userPiyo) {
            let arr = JSON.parse(userPiyo);
            arr.push((user))
            localStorage.setItem("userPiyo", JSON.stringify(arr));
            alert("Đăng ký thành công");
            window.location.href="LoginPiyo.html"
        }else {
            localStorage.setItem("userPiyo", JSON.stringify([user]));
            alert("Đăng ký thành công");
            window.location.href="LoginPiyo.html"
        }
    }
}

function login(e) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var userPiyo = localStorage.getItem('userPiyo');
    var data = JSON.parse(userPiyo);
    var loggedInUser = null;

    if (userPiyo === null) {
      alert("Login failed");
    } else {
      loggedInUser = data.find(function(user) {
        return user.email === email && user.password === password;
      });

      if (loggedInUser) {
        alert("Đăng nhập thành công");
        window.location.href = "home.html";
      } else {
        alert("Tài khoản hoặc mật khẩu sai");
      }
    }
}
