/**
 * ?Xuất 3 số theo thứ tự tăng dần
 * Khối 1: 3 số dương
 * Khối 2:
 * Tạo biến soThu1, soThu2, soThu3
 * gán giá trị 
 * lập công thức: sử dụng lệnh if else lồng nhau
 *                So sánh num1,num2,num3 theo từng cặp
 *                Chia nhỏ từng trường hợp cho ra các dãy số
 * Thông báo kq
 * Khối 3:Output
 * sapXep
 */
function tangdan (){
    var soThu1 = Number(document.getElementById("number1").value);
    var soThu2 = Number(document.getElementById("number2").value);
    var soThu3 = Number(document.getElementById("number3").value);

var sapXep;
if (soThu1 > soThu2){
    if (soThu2>soThu3) {
        sapXep = soThu1 < soThu2 < soThu3;
        console.log(sapXep = soThu3 + "<"+soThu2 +"<" + soThu1);

    } else {
        if (soThu1 > soThu3) {
            sapXep = soThu2 < soThu3 < soThu1;
            console.log(sapXep = soThu2 + "<" + soThu3 + "<" + soThu1);
        } else {
            sapXep = soThu2 < soThu1 < soThu3;
            console.log(sapXep = soThu2 + "<" + soThu1 + "<" + soThu3);
        }

    }
    
} else {
    if (soThu1 > soThu2) {
        sapXep = soThu3 < soThu1 < soThu2;
        console.log(sapXep = soThu3 + "<" + soThu1 + "<" + soThu2);
    }
    else {
        if (soThu2 > soThu3) {
            sapXep = soThu1 < soThu3 < soThu2;
            console.log(sapXep = soThu1 + "<" + soThu3 + "<" + soThu2);

        } else {
            sapXep = soThu1 < soThu2 < soThu3;
            console.log(sapXep = soThu1 + "<" + soThu2 + "<" + soThu3);
        }
    }
}
document.getElementById("txtResultbai1").innerHTML = sapXep;

}
document.getElementById("btnbai1").onclick = tangdan;

/**
 * ?Chương trình chào hỏi
 * Khối 1: Input
 * tên đối tượng
 * Khối 2:
 * Tạo biến selectValue
 * gán giá trị
 * lập công thức: Nếu value = 'Bo' thì kq là 'Xin chao Bố!'
 *                Các trường hợp còn lại tương tự
 * Thông báo kq
 * Khối 3: Output
 * chaoHoi
 */function chaoHoi (){
    var namevalue = document.getElementById("Listoption").value;
    var name;
    switch (namevalue) {
        case "Bo":
            name = "Xin Chào Bố"
            break;
        case "Me":
            name = "Xin Chào Mẹ"
            break;
        case "Anh":
            name = "Xin Chào Anh"
            break;
        case "Em":
            name = "Xin Chào Em"
            break;
        default:
            name = "Xin chào người lạ ơi!";
            break;
    }
    document.getElementById("txtchao").innerHTML = name

}
document.getElementById("btnchao").onclick = chaoHoi;

/**
 * ?Đếm số chẵn, lẻ
 * Khối 1: Input
 * 3 số dương
 * Khối 2:
 * Tạo biến so1, so2, so3 và biến count để đếm số chẵn
 * Gán giá trị: count = 0
 * Lập công thức: nếu so1 % 2 ==0 thi so1 là số chẵn count++
 *                trường hợp còn lại tương tự
 *                 số lượng số lẻ = 3 - count
 * Thông báo kq
 * Khối 3: output
 * Thông báo số lượng số chẵn, lẻ
 */
 function chanLe() {
    var so1 = Number(document.getElementById("sothu1").value);
    var so2 = Number(document.getElementById("sothu2").value);
    var so3 = Number(document.getElementById("sothu3").value);
    var count = 0;

    so1 % 2 == 0 ? count++ : count;
    so2 % 2 == 0 ? count++ : count;
    so3 % 2 == 0 ? count++ : count;
    document.getElementById('txtResultbai3').innerHTML = `Có ${count} số chẵn và ${3 - count
        } số lẻ`;
}
document.getElementById("btnbai3").onclick = chanLe;


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
        duDoan = "Hình tam giác khác";
    }
    document.getElementById("txtResultbai4").innerHTML = duDoan
}
document.getElementById("btnbai4").onclick = tamGiac;
 