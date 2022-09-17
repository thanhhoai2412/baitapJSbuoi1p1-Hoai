function chaoHoi (){
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