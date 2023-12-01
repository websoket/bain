function changeText() {
    var paragraph = document.querySelector('p');
    if (paragraph.innerHTML === "Clicke.") {
        paragraph.innerHTML = "Aha!";
        paragraph.style.color = "blue"; // Optional: change text color
    } else {
        paragraph.innerHTML = "Click me to change text.";
        paragraph.style.color = ""; // Reset text color
    }
}