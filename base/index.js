// 1. Hàm ko có tham số và không có giá trị trả về

function sayHello() {
  console.log("Hello");
  console.log("Xin Chao");
}

sayHello();
sayHello();
sayHello();

// 2. Hàm có tham số và không có giá trị trả về

// tham số: parameter: dùng dể nhận giá trị từ bên ngoài khi bạn gọi hàm

function sayHello(name) {
  console.log("Hello", name);
}

sayHello("Tuan");

// 3. Ham co tham so va co gia tri tra ve
// return : gui 1 gia tri tu trong ham ra ngoai ham

// tinh diem TB

// 1: goi ham tinhdiemtb

function tinhDiemTB(score1, score2) {
  var result = (score1 + score2) / 2;
  //   console.log("🚀 ~ tinhDiemTB ~ result:", result);
  return result;
  console.log("YES"); // khong chay bo vi return da dung ham tai dong 33. sau return ham khong chay
}

var number = tinhDiemTB(5, 90);
console.log("🚀 ~ number:", number);

//

// function tinhDTB() {
//   var diemToan = Number(document.getElementById("diemToan").value);
//   var diemVan = Number(document.getElementById("diemVan").value);

//   var diemTB = tinhDiemTB(diemToan, diemVan);

//   document.getElementById("result").innerHTML = diemTB;
// }

// function tinhDiemTB(diem1, diem2) {
//   var dtb = (diem1 + diem2) / 2;
//   return dtb;
// }
