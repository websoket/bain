function changeText() {
    var paragraph = document.getElementById("clicke");
    var paragraph_before_text = "Clicke."

    if (paragraph.innerHTML == "Clicke.") {
        paragraph.innerHTML = "Aha!";
        paragraph.style.color = "yellow"; // Optional: change text color
        console.log(Math.random());
        if ((Math.random()) > 0.95){
            window.location = "/src"
        }
        
    } else {
        paragraph.innerHTML = paragraph_before_text;
        paragraph.style.color = "";
    }
}
