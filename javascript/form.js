const modal = document.getElementById("myModal");
const openModalButtons = document.querySelectorAll(".openModal"); // Изменено на выбор всех кнопок с классом
const closeModalButton = document.getElementById("closeModal");
const submitFormButton = document.getElementById("submitForm");
const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");


openModalButtons.forEach(button => {
    button.onclick = function() {
        modal.style.display = "block";
    }
});


closeModalButton.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


submitFormButton.onclick = function() {
    let valid = true;


    [nameInput, phoneInput, emailInput].forEach(input => {
        input.classList.remove("error");
    });


    if (nameInput.value.trim() === "") {
        nameInput.classList.add("error");
        valid = false;
    }


    const phoneValue = phoneInput.value;
    if (phoneValue.length !== 13 || !phoneValue.startsWith("+375")) {
        phoneInput.classList.add("error");
        valid = false;
    }


    if (emailInput.value.trim() === "") {
        emailInput.classList.add("error");
        valid = false;
    }

  
    if (!valid) {
        alert("Пожалуйста, заполните обязательные поля.");
    } else {
        alert("Форма успешно отправлена!");
        modal.style.display = "none";
    }
}