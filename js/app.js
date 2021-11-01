const addressCard = document.querySelector(".address");

eventListeners();

function eventListeners() {
    addressCard.addEventListener("click", deleteCard);
}

function deleteCard(e) {
    if (e.target.className === "fas fa-times") {
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
    }
}