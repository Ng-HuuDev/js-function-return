function tinhTien() {
  var loaiXe = document.querySelector('input[name="selector"]:checked').value;
  var soKm = Number(document.getElementById("txt-km").value);
  // output : number
  var thanhTien = 0;
  var kmDauTien = 0;
  var km1Den19 = 0;
  var km19TroDi = 0;

  if (loaiXe == "uberCar") {
    kmDauTien = 8000;
    km1Den19 = 7500;
    km19TroDi = 7000;
  } else if (loaiXe == "uberSUV") {
    kmDauTien = 9000;
    km1Den19 = 8500;
    km19TroDi = 8000;
  } else {
    kmDauTien = 10000;
    km1Den19 = 9500;
    km19TroDi = 9000;
  }

  if (soKm <= 1) {
    thanhTien = kmDauTien * soKm;
  }
  if (soKm <= 19) {
    thanhTien = kmDauTien + (soKm - 1) * km1Den19;
  } else {
    thanhTien = kmDauTien + 18 * km1Den19 + (soKm - 19) * km19TroDi;
  }

  //
  console.log("🚀 ~ tinTien ~ thanhTien:", thanhTien);
}

document.getElementById("btn-tinh-tien").addEventListener("click", tinhTien);
