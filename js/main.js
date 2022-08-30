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
    price: 509.000,
  };
  products.push(add);
  document.getElementById("badge").innerHTML = products.length;
}
// thêm số lượng sản phẩm
function addProduct (){
    let soluong = document.getElementById('soluong').value;
    let numproduct = Number(soluong);
    let count=1;
    let sum = numproduct + count;
    // console.log(sum);
    document.getElementById('soluong').value = sum;
}
function reduceProduct(){
    let soluong = document.getElementById('soluong').value;
    let numproduct = Number(soluong);
    let count=1;
    if(numproduct >1){
        let sum = numproduct - count;
        // console.log(sum);
        document.getElementById('soluong').value = sum;
    } else {
        return;
    }
}
