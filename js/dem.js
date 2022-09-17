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

