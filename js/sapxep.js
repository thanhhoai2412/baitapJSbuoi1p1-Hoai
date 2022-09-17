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
        sapXep = soThu1 +"->"+ soThu2 +"->"+soThu3;
        console.log(sapXep = soThu3 + "->"+soThu2 +"->" + soThu1);

    } else {
        if (soThu1 > soThu3) {
            sapXep = soThu2 +"->"+ soThu3 +"->"+ soThu1;
            console.log(sapXep = soThu2 + "->" + soThu3 + "->" + soThu1);
        } else {
            sapXep = soThu2 +"->"+ soThu1 +"->"+ soThu3;
            console.log(sapXep = soThu2 + "->" + soThu1 + "->" + soThu3);
        }

    }
    
} else {
    if (soThu1 > soThu2) {
        sapXep = soThu3+"->"+ soThu1 +"->"+ soThu2;
        console.log(sapXep = soThu3 + "->" + soThu1 + "->" + soThu2);
    }
    else {
        if (soThu2 > soThu3) {
            sapXep = soThu1 +"->"+soThu3 +"->"+ soThu2;
            console.log(sapXep = soThu1 + "->" + soThu3 + "->" + soThu2);

        } else {
            sapXep = soThu1 +"->"+ soThu2 +"->"+ soThu3;
            console.log(sapXep = soThu1 + "->" + soThu2 + "->" + soThu3);
        }
    }
}
document.getElementById("txtResultbai1").innerHTML = "Các số được sắp xếp theo thứ tự tăng dần là "+sapXep;

}
document.getElementById("btnbai1").onclick = tangdan;


