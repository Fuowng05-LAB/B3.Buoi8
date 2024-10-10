function Button1_onclick() {
    let randomNumber = Math.floor(Math.random() * 10) + 1; // Lấy ngẫu nhiên số từ 1 đến 10
    let userGuess = document.getElementById("txtAddr1").value; // Lấy giá trị người dùng nhập

    if (userGuess == randomNumber) {
        alert("Chúc mừng! Bạn đã đoán đúng số " + randomNumber);
    } else {
        alert("Bạn đoán sai. Hãy thử lại!");
    }
}
