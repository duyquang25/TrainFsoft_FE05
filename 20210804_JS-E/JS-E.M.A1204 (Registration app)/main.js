const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const cfpassword = document.getElementById('confirmPassword');
const infor = document.getElementById("information");

// Biến check điều kiện để submit
var check = true;


// Lăng nghe sự kiện submit 
form.addEventListener('submit', e => {


	// Loại bỏ mặc định
	e.preventDefault();
	
	checkInputs();

	if(check){

		infor.innerHTML = "You have required successfully";

		setTimeout(() => location.reload() , 1000);

		
	} else {
		check = true;
	};
	
});


// Hàm check lỗi các input
function checkInputs() {

	
	// Sử dụng trim() để xóa khỏa trắng
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	const cfpasswordValue = cfpassword.value.trim();
	

	// Kiểm tra input User
	if(usernameValue === '') {
		setErrorFor(username, 'Username is required');
	} else {
		setSuccessFor(username);
	}
	

	// Kiểm tra password
	if(passwordValue === '') {
		setErrorFor(password, 'Password is required');
	} else {
		setSuccessFor(password);
	}
	

	// Kiểm tra confirm password
	if(cfpasswordValue === '') { 
		setErrorFor(cfpassword, 'Confirm Password is required');
	} else if(passwordValue !== cfpasswordValue) {
		setErrorFor(cfpassword, 'Confirm Password does not match');
	} else{
		setSuccessFor(cfpassword);
	}
}


// Hàm xử lí khi lỗi và báo message
function setErrorFor(input, message) {

	check = false;

	//console.log(check);

	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}


// Hàm xử lí khi hợp lệ
function setSuccessFor(input) {

	if(check) {
		check = true;
	}
	//console.log(check);

	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	

