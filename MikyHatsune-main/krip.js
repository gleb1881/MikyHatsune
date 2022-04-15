//alert("Русским Привет, Остальным соболезную")





function guess() {
    var guessNum = "Z";
    var ourNum = prompt("Тест на хохловату Ведите букву Z");
    if (guessNum == ourNum) {
        return alert("Ты Патриот");
    } else if (guessNum > ourNum) {
        alert("Ты хохол");
        return guess();
    } else {
        alert("Ты хохол");
        return guess();
    }

}


//guess();

function reminder() {
    alert("Санкции Хохлам на время");
    window.location.href = "reg.html";
    
}
//setTimeout(reminder, 3000);



function valid() {
    var name = document.getElementById("name").value;
    var passworde = document.getElementById("password").value;
    //console.log(name);
    var reg_name = /^[a-zа-яё]+$/i;
    var reg_password = /^[a-z0-9]{5,100}/i;


    if (reg_name.test(name) == false)
        alert("Ошибка в поле ФИО");
    
    if (reg_password.test(passworde) == false)
        alert("Ошибка в поле пароль");

}

document.querySelector(".button").addEventListener("click", valid);

