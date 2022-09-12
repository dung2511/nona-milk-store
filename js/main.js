const products = [
  {
    name: "Sữa Meiji Infant Formula 800g (0-12 tháng)",
    price: 509.0,
  },
];
const badge = document.getElementById("bagde");
document.getElementById("badge").innerHTML = products.length;
function addToCart() {
  let add = {
    name: "Sữa Meiji Infant Formula 800g (0-12 tháng)",
    price: 509.0,
  };
  products.push(add);
  document.getElementById("badge").innerHTML = products.length;
}
function add() {
  let soluong = document.getElementById("soluong").value;
  let numproduct = Number(soluong);
  let count = 1;
  let sum = numproduct + count;
  // console.log(sum);
  document.getElementById("soluong").value = sum;
}
function reduce() {
  let soluong = document.getElementById("soluong").value;
  let numproduct = Number(soluong);
  let count = 1;
  if (numproduct > 1) {
    let sum = numproduct - count;
    // console.log(sum);
    document.getElementById("soluong").value = sum;
  } else {
    return;
  }
}
// thêm số lượng sản phẩm
function addProduct() {
  let dongia = document
    .getElementById("dongia")
    .innerHTML.slice(0, -1)
    .replace(".", "");
  let soluong = document.getElementById("soluong").value;
  let numproduct = Number(soluong);
  let count = 1;
  let sum = numproduct + count;
  // console.log(sum);
  document.getElementById("soluong").value = sum;
  document.getElementById("total").innerHTML = (
    sum * Number(dongia)
  ).toLocaleString("vi", { style: "currency", currency: "VND" });
  document.getElementById("soluong-detail").innerHTML = sum;
  document.getElementById("price-last").innerHTML = (
    sum * Number(dongia)
  ).toLocaleString("vi", { style: "currency", currency: "VND" });
}
function addRes() {
  let giasanpham = document
    .getElementById("gia-san-pham")
    .innerHTML.slice(0, -1)
    .replace(".", "");
  let soluongres = document.getElementById("soluongresponsive").value;
  let number = Number(soluongres);
  let count = 1;
  document.getElementById("soluongresponsive").value = number + count;
  document.getElementById("soluong-detail").innerHTML = number + count;
  document.getElementById("price-last").innerHTML = (
    (number + count) *
    Number(giasanpham)
  ).toLocaleString("vi", { style: "currency", currency: "VND" });
}
function reduceRes() {
  let giasanpham = document
    .getElementById("gia-san-pham")
    .innerHTML.slice(0, -1)
    .replace(".", "");
  let soluongres = document.getElementById("soluongresponsive").value;
  let number = Number(soluongres);
  let count = 1;
  if (number > 1) {
    let sum = number - count;
    document.getElementById("soluongresponsive").value = sum;
    document.getElementById("soluong-detail").innerHTML = sum;
    document.getElementById("price-last").innerHTML = (
      sum * Number(giasanpham)
    ).toLocaleString("vi", { style: "currency", currency: "VND" });
  } else {
    return;
  }
}

function reduceProduct() {
  let dongia = document
    .getElementById("dongia")
    .innerHTML.slice(0, -1)
    .replace(".", "");
  let soluong = document.getElementById("soluong").value;
  let numproduct = Number(soluong);
  let count = 1;
  if (numproduct > 1) {
    let sum = numproduct - count;
    // console.log(sum);
    document.getElementById("soluong").value = sum;
    document.getElementById("total").innerHTML = (
      sum * Number(dongia)
    ).toLocaleString("vi", { style: "currency", currency: "VND" });
    document.getElementById("soluong-detail").innerHTML = sum;
    document.getElementById("price-last").innerHTML = (
      sum * Number(dongia)
    ).toLocaleString("vi", { style: "currency", currency: "VND" });
  } else {
    return;
  }
}
function signUp() {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let user = {
    username: username,
    email: email,
    password: password,
  };
  let json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Đăng kí thành công");
}
function login() {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let user = localStorage.getItem(username);
  let data = JSON.parse(user);
  if ((user = "")) {
    alert("Vui lòng điền tên đăng nhập hoặc mật khẩu");
  } else if (username == data.username && password == data.password) {
    alert("Đăng nhập thành công");
    window.location.href = "index.html";
  } else {
    alert("Đăng nhập thất bại");
  }
}

var imgFeature = document.querySelector(".img-feature");
var listImg = document.querySelectorAll(".list-image img");
var currentIndex = 0;
function updateImageIndex(index) {
  document.querySelectorAll(".list-image div").forEach((item) => {
    item.classList.remove("active");
  });
  currentIndex = index;
  imgFeature.src = listImg[index].getAttribute("src");
  listImg[index].parentElement.classList.add("active");
}
listImg.forEach((imgElement, index) => {
  imgElement.addEventListener("click", (e) => {
    updateImageIndex(index);
  });
});
updateImageIndex(0);

function contact() {
  let fname = document.getElementById("fname").value;
  let femail = document.getElementById("femail").value;
  let fcontent = document.getElementById("fcontent").value;
  if (fname == "" && femail == "" && fcontent == "") {
    document.getElementById("thong-bao").style.display = "block";
  } else {
    document.getElementById("thong-bao").innerHTML =
      "Đã gửi yêu cầu thành công";
    document.getElementById("thong-bao").style.display = "block";
    document.getElementById("thong-bao").style.color = "green";
  }
}
function submit(){
  let dienthongtin = document.getElementById('dienthongtin').value;
  let hoten = document.getElementById('ho-ten').value;
  if (dienthongtin==''&& hoten== ''){
    document.getElementById('check-dien-thong-tin').innerHTML = 'Vui lòng điền đầy đủ thông tin';
    document.getElementById('check-dien-thong-tin').style.color='#d91545';
    document.getElementById('check-dien-thong-tin').style.textAlign='center';
  } else {
    document.getElementById('check-dien-thong-tin').innerHTML = 'Đã gửi thành công';
    document.getElementById('check-dien-thong-tin').style.color='#4fb3a2';
    document.getElementById('check-dien-thong-tin').style.textAlign='center';
  }
}