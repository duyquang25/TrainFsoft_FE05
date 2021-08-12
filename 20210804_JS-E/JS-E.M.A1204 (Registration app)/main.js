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
		checkError(username, 'Username is required');
	} else {
		checkSuccess(username);
	}
	

	// Kiểm tra password
	if(passwordValue === '') {
		checkError(password, 'Password is required');
	} else {
		checkSuccess(password);
	}
	

	// Kiểm tra confirm password
	if(cfpasswordValue === '') { 
		checkError(cfpassword, 'Confirm Password is required');
	} else if(passwordValue !== cfpasswordValue) {
		checkError(cfpassword, 'Confirm Password does not match');
	} else{
		checkSuccess(cfpassword);
	}
}


// Hàm xử lí khi lỗi và báo message
function checkError(input, message) {

	check = false;

	//console.log(check);

	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}


// Hàm xử lí khi hợp lệ
function checkSuccess(input) {

	if(check) {
		check = true;
	}
	//console.log(check);

	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	

