let checkPassword = function() {
    let pass =  document.getElementById('password');
    let confirmPass = document.getElementById('confirm_password');
    if (pass.value == confirmPass.value && pass.value != "") {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching password';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching password';
    }
  }