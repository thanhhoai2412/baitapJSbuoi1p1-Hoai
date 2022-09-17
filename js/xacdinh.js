/**
 * ?Xác định loại tam giác
 * Khối 1: Input
 * chieu dai 3 canh ( canh1, canh2, canh3)
 * Khối 3:
 * Tạo biế canh1, canh2, canh3
 * Gán giá trị
 * Lập công thức: Nếu canh1 == canh2 && canh2 == canh3 => tam giác đều
 *                Nếu canh1 == canh2 || canh2 == canh3 || canh1 == canh3 = tam giác cân
 *                Nếu 1 cạnh bằng căn bậc 2 của tổng bình phương 2 cạnh còn lại => tam giác vuông
 *                Còn trường hợp khác là tam  giác khác
 * Thông báo kq
 * Khối 3: output
 * kq tam giác : duDoan
 * 
 */
 function tamGiac() {
    var canh1 = Number(document.getElementById("canh1").value);
    var canh2 = Number(document.getElementById("canh2").value);
    var canh3 = Number(document.getElementById("canh3").value);
    var duDoan;
    if (canh1 == canh2 && canh2 == canh3) {
        duDoan = "Hình tam giác đều";
    } else if (canh1 == canh2 || canh2 == canh3 || canh1 == canh3) {
        duDoan = "Hình tam giác cân ";
    } else if ((canh1 * canh1 == canh2 * canh2 + canh3 * canh3) || (canh2 * canh2 == canh1 * canh1 + canh3 * canh3) || (canh3 * canh3 == canh2 * canh2 + canh1 * canh1)) {
        duDoan = "Hình tam giác vuông";
    } else {
        duDoan = "Hình tam giác thường";
    }
    document.getElementById("txtResultbai4").innerHTML = duDoan
}
document.getElementById("btnbai4").onclick = tamGiac;
 