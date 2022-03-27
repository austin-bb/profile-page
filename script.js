console.log("page loaded...");
let badge = 2;

function remove() {
    let element = document.querySelector(".card-list-item:first-child");
    let countElement = document.querySelector(".badge");
    badge--;
    countElement.innerText = badge;
    element.remove();
    console.log(badge);
}


function remove2() {
    let element2 = document.querySelector(".card-list-item:last-child");
    element2.remove();  
}


function change_text() {
    document.querySelector(".card-body h1").innerHTML = "James Doe";
}
